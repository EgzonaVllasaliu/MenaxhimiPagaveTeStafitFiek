var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

//modules from our routes directory
// var userRouter = require('./routes/users');
var indexRouter = require('./routes/index');

var app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//add the middleware libraries into the request handling chain
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//middleware that gets Express to serve all the static files in the /public directory in the project root
app.use(express.static(path.join(__dirname, 'public')));

// particular routes for the different parts of the site
// app.use('/users', userRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//require the express module
// const chatRouter = require("./routes/chatroute");

// //require the http module
// const http = require("http").Server(app);

// // require the socket.io module
// const io = require("socket.io");

// // const port1 = port;

// //bodyparser middleware
// app.use(bodyParser.json());

// //routes
// app.use("/chats", chatRouter);
// // app.use("/login", loginRouter);

// //set the express.static middleware
// app.use(express.static(__dirname + "/public"));

// //integrating socketio
// socket = io(http);

// //database connection
// const Chat = require("./models/Chat");
// // const connect = require("./dbconnect");

// //setup event listener
// socket.on("connection", socket => {
//   console.log("user connected");

//   socket.on("disconnect", function() {
//     console.log("user disconnected");
//   });

//   //Someone is typing
//   socket.on("typing", data => {
//     socket.broadcast.emit("notifyTyping", {
//       user: data.user,
//       message: data.message
//     });
//   });

//   //when soemone stops typing
//   socket.on("stopTyping", () => {
//     socket.broadcast.emit("notifyStopTyping");
//   });

//   socket.on("chat message", function(msg) {
//     console.log("message: " + msg);

//     //broadcast message to everyone in port:5000 except yourself.
//     socket.broadcast.emit("received", { message: msg });

//     // //save chat to the database
//     // connect.then(db => {
//     //   console.log("connected correctly to the server");
//     //   let chatMessage = new Chat({ message: msg, sender: "Anonymous" });

//     //   chatMessage.save();
//     // });
//   });
// });

// // http.listen(port, () => {
// //   console.log("Running on Port: " + port);
// // });


module.exports = app;