var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    User = require("./models/users"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    passport = require("passport"),
    mongoose = require("mongoose");

var authRoutes = require("./routes/index");

// mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/pbdboardgame", {useNewUrlParser: true});

//mongoose.connect("mongodb:rj:infosci35@ds137263.mlab.com:37263/pbdboardgame", {useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); //

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));;
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use("/", authRoutes);

// app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("The YelpCamp Server Has Started!");
// });


var server = app.listen(3000, () => {           //This will log where ther port is listening
	console.log('server is listening on port', server.address().port)
});
