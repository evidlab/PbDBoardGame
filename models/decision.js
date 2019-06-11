var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var DecisionSchema = new mongoose.Schema({
});

DecisionSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Decision", DecisionSchema);