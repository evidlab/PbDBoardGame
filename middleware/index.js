var User = require("../models/users");
var Team = require("../models/teams");

var middlewareObj = {};

middlewareObj.checkForTeam = function(req, res, next){

  if(req.collectionExists(req.body.teamname)){
    alert("FYI This team exists already");
    var team = req.getCollection(req.body.teamname);
    if(team.teamrole.username.equals(req.role)){
      alert("That Role is Taken");
      res.redirect("back");
    }else {
      next();
    }
  }else {
    var newTeam = {
      teamname: req.body.teamname,
      developertime: 0,
      usertrust: 0,

    };
    // Team.register(){
    //
    // }
  }
}

module.exports = middlewareObj;
