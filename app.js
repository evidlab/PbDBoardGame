var express = require("express");
var favicon = require("serve-favicon");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var User = require("./models/users");
var Team = require("./models/teams");
var passport = require("passport");
var expressSession = require('express-session');
var MongoStore = require('connect-mongo')(expressSession);
var mongoose = require("mongoose");
var flash = require("flash");
var port = 3000;
let server = require('http').Server(app);

var authRoutes = require("./routes/index");

mongoose.connect("mongodb://mongo:27017/pbdboardgame", {useNewUrlParser: true});

//mongoose.connect("mongodb://rj:infosci35@ds137263.mlab.com:37263/pbdboardgame", {useNewUrlParser: true});
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.bmp')));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //
process.on('unhandledRejection', error => {
  // Won't execute
  console.log('unhandledRejection', error.test);
});

new Promise((_, reject) => reject({ test: 'woops!' })).catch(() => {});
app.use(require("express-session")({
  secret: "I like turtles",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

//Configure Flash
app.use(flash());
app.locals.moment = require('moment');

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));;
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Include User variable on every page
app.use(function(req, res, next){
  try {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    // res.locals.currentTeam = Team.findOne({"teammember.id": req.user._id});
    next();
  } catch(err) {
    next(err);
  }
});

app.use("/", authRoutes);

//
// var server = app.listen(3000, () => {           //This will log where ther port is listening
// 	console.log('server is listening on port', server.address().port)
// });

server.listen(port, function() {
    console.log("App is running on port " + port);
});
