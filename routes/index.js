var express = require("express");
var router = express.Router();
var passport = require("passport");
var middleware = require("../middleware");
var User = require("../models/users");
var Team = require("../models/teams");
//====================
//Auth Routes
//====================

router.get("/", function(req, res){
  if(req.user){
    Team.findOne({"teammember.id": req.user._id}, function(err, foundTeam){
      if(err){
        console.log(err);
      } else {
        res.render("landing",{currentTeam: foundTeam, page: '/partials/header'});
      }
    })
  }else{
    res.render("landing");
  }
});

// show register form
router.get("/register", function(req, res){
   res.render("register", {page: 'register'});
});

//show login form
router.get("/login", function(req, res){
   res.render("login", {page: 'login'});
});

router.get("/gameBoard", function(req, res){
  if(req.user){
    Team.findOne({"teammember.id": req.user._id}, function(err, foundTeam){
      if(err){
        console.log(err);
      } else {
        // res.send({currentTeam: foundTeam, page: '../controller/index.js'});
          // res.render("landing");
        res.render("gameBoard/index",{currentTeam: foundTeam, page: 'gameBoard/index'});
      }
    })
  }else{
    res.render("landing");
  }
});

router.get("/jointeam", function(req, res){
  Team.find({}, function(err, allTeams){
     if(err){
         console.log(allTeams);
     } else {
       console.log("success");
        // res.send({teams: allTeams});
        res.render("jointeam",{teams: allTeams, page: 'jointeam'});
     }
  });

  // res.render("jointeam");
});


//handle sign up logic
router.post("/register", function(req, res){
  var newUser = new User({
    username: req.body.username,
    // developertime: 25,
    // usertrust: 25
  });
  //Check
  User.register(newUser, req.body.password, function(err, response){
    if(err){
      console.log(err);
      req.flash("error", err.message);
      return res.redirect('/register');
    }
    passport.authenticate("local")(req, res, function(){
           req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
           res.redirect("/");
        });
  });
});

//Handling Login logic
router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/",
    failureRedirect: "/login"
  }), function(req, res){

});

//Logout logic
router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "Logged out succesfully!");
  res.redirect("/");
});

//Handle New Team Logic
router.post("/jointeam",  function(req, res){
  if(req.body.existing_team == "none"){
    var teamname = req.body.teamname;
    var developertime = 25;
    var usertrust = 25;
    var teammember = {
      id: req.user._id,
      username: req.user.username,
      role: req.body.role
    }
    var newTeam = {teamname: teamname, developertime: developertime, usertrust: usertrust, teammember: teammember};
    //Create New Team and add the DB
    Team.create(newTeam, function(err, response){
      if(err){
        console.log("error");
        req.flash("error", err.message);
        return res.redirect('/jointeam');
      } else {
        req.flash("success", "Successfully Created a Team! ");
        res.redirect("/");
        // res.send({currentTeam: teamname});
      }
    });
  }else {
    var alternate = req.body.existing_team;
    var other_teammember = {
      id: req.user._id,
      username: req.user.username,
      role: req.body.role
    }
    Team.update({teamname: alternate}, { $push: { teammember:other_teammember}}, function(err, updatedTeam){
      if(err){
        console.log(err);
        req.flash("Could Not Find Team", err.message);
        return res.redirect('/jointeam');
      }else{
        req.flash("success", "Succesfully Joined Team");
        res.redirect('/');

      }
    });
  }

});
//Check score
router.get("/checkScore/:id", function(req, res){
  Team.findById(req.params.id, function(err, foundTeam) {
      if(err) {
        console.log(err);
      }else{
        if(value = "user"){
          res.send({data: foundTeam.usetrust});
        }else {
          res.send({data: foundTeam.developertime});
        }
      }
    });
});

//Update Score
router.get("/updateScore/:id", function(req, res){
  Team.findById(req.params.id, function(err, foundTeam) {
      if(err) {
        console.log(err);
      }else{
        res.send({newDevScore: foundTeam.developertime, newUserScore: foundTeam.usetrust});
      }
    });
});


// Add and Subtract Points
router.put("/addMultiplePoints/:id", function(req, res){
    var user_points = req.body.userPoints;
    var dev_points = req.body.devPoints;
    Team.findOneAndUpdate({ _id: req.params.id },
        { $inc: { usertrust: user_points, developertime: dev_points } },
        { new: true },
        function (err, updatedUser) {
            if(err){
              console.log("Something Went Wrong" + err);
            }else{
              res.send({userPoints: user_points, devPoints: dev_points});
              console.log(updatedUser);
            }
        });
});

router.put("/addPoints/:id", function(req, res){
 var points = req.body.params;
 var type = req.body.type;
 if(type == "user"){
   Team.findOneAndUpdate({_id: req.params.id}, { $inc : { usertrust : points }},  { new: true }, function(err, updatedUser){
     if(err){
       console.log("Something Went Wrong" + err);
     }else{
       console.log(updatedUser);
     }
   });
 }else {
   Team.findOneAndUpdate( {_id: req.params.id}, { $inc : { developertime : points }},  { new: true }, function(err, updatedUser){
     if(err){
       console.log("Something Went Wrong" + err);
     }else{
       console.log(updatedUser);
       res.send("success");
     }
   });
 }
});

//Reset Game Points
router.post("/resetGame/:id", function(req, res){
  points = 25;
  Team.findOneAndUpdate({_id: req.params.id}, { $set : { usertrust : points, developertime : points }}, { new: true }, function(err, updatedUser){
    if(err){
      console.log("Something Went Wrong" + err);
    }else{
      res.send("done");
      console.log(updatedUser);
    }
  });
});

//SHOW Team Members - shows more info about one campground
router.get("/:id", function(req, res){
  if(req.user){
    Team.findById(req.params.id, function(err, foundTeam){
      if(err){
        console.log(err);
      } else {
      //     res.send({currentTeam: foundTeam});
          // res.render("landing");
        res.render("teams",{currentTeam: foundTeam, page: '/partials/header'});
      }
    })
  }else{
    res.render("landing");
  }
});

router.get("/leaveteam/:id", function(req, res){
    Team.update({_id: req.params.id}, { $pull: {teammember: {id:req.user._id }}}, function(err, foundTeam){
      if(err){
        console.log(err);
      } else {
        console.log(foundTeam);
        res.redirect("/");
      }
    })
});


module.exports = router;
