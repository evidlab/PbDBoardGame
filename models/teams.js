var mongoose = require("mongoose");

var TeamSchema = new mongoose.Schema ({
  teamname: String,
  developertime: Number,
  usertrust: Number,
  teammember: [
      {
        id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        },
        username: String,
        role: String
      }
   ]
});

module.exports =  mongoose.model("Team", TeamSchema);
