var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema ({
  username: String,
  password: String,
  avatar: String,
  firstName: String,
  LastName: String,
  email: String,
});

UserSchema.plugin(passportLocalMongoose);
module.exports =  mongoose.model("User", UserSchema);
