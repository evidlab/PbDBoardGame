var express = require("express");
var router = express.Router();
var passport = require("passport");
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

//handle sign up logic
router.post("/register", function(req, res){
  var newUser = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    LastName: req.body.LastName,
    email: req.body.email,
    avatar: req.body.avatar
  });

  User.register(newUser, req.body.password, function(err, user){
          if(err){
              console.log(err);
              req.flash("error", err.message);
              return res.redirect('/register');
          }
          passport.authenticate("local")(req, res, function(){
             req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
             res.redirect("/campgrounds");
          });
      });
  });

//Handling Login logic
router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
  }), function(req, res){

});

//Logout logic
router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "Logged out succesfully!");
  res.redirect("/campgrounds");
});


module.exports = router;
