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
  res.render("landing");
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
  res.render("gameBoard/index");
});

router.get("/jointeam", function(req, res){
  res.render("jointeam");
});

//handle sign up logic
router.post("/register", function(req, res){
  var newUser = new User({
    username: req.body.username,
    developertime: 25,
    usertrust: 25
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
  var teamname = req.body.teamname;
  var developertime = 0;
  var usertrust = 0;
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
    } else {
      res.redirect("/");
    }
  });
});
//Check score
router.get("/gameBoard", function(req, res){
  User.findById(req.params.id, function(err, foundUser) {
      if(err) {
        console.log(err);
      }else{
        res.render("gameBoard", {data: foundUser.usetrust});
      }
    });
});


// Add and Subtract Points
router.put("/gameBoard", function(req, res){
  var points = req.body.params;
  var type = req.body.type;

  if(type == "user"){
    User.findOneAndUpdate({_id: req.user.id}, { $inc : { usertrust : points }},  { new: true }, function(err, updatedUser){
      if(err){
        console.log("Something Went Wrong" + err);
      }else{
        console.log(updatedUser);
      }
    });
  }else {
    User.findOneAndUpdate( {_id: req.user.id}, { $inc : { developertime : points }},  { new: true }, function(err, updatedUser){
      if(err){
        console.log("Something Went Wrong" + err);
      }else{
        console.log(updatedUser);
      }
    });
  }
  // User.findById(req.user.id, function(err, foundUser){
  //   if(err){
  //     console.log(err);
  //   }else {
  //
  //   }
  // });
});
//INDEX - show all Teams
// router.get("/jointeam", function(req, res){
//     //inspects results from search query
//     if(req.query.search){
//       const regex = new RegExp(escapeRegex(req.query.search), 'gi');
//       //search through name of Campground based on search query
//       Team.find({name: regex}, function(err, allTeams){
//          if(err){
//              console.log(err);
//          } else {
//            //Check if query result exist
//            if(allTeams.length == 0){
//              // req.flash("error", "No Campground Matching that name exist");
//              console.log("No teams found");
//            }else{
//               res.render("jointeam",{teams: allTeams, page: 'jointeam'});
//            }
//
//          }
//       });
//     }else{
//       // Get all campgrounds from DB
//       Team.find({}, function(err, allTeams){
//          if(err){
//              console.log(err);
//          } else {
//             res.render("jointeam",{teams: allTeams, page: 'jointeam'});
//          }
//       });
//     }
// });


module.exports = router;
