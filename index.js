var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var passport = require('passport');
var moment = require('moment');

/*******************************/
// this is for the routes
var route_index = require('./routes/index');
/*******************************/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('bekazon'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'bekazon',
	resave: true,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));

/*******************************/
var cors = require('cors');
app.use(cors());
/*******************************/

/*******************************/
// this is for the views
app.use('/', route_index);
/*******************************/

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers
// development error handler, will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler, no stacktraces leaked to user
app.use(function(err, req, res, next) {
	console.log(err);
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

/*******************************/
var server = http.createServer(app);
io = require('socket.io')(server);
app.set('port',80);
server.listen(app.get('port'));

/* modules */
var _bekazon = require('./bekazon');
var downloader = require('./downloader');
//var bekazon = new bekazon();
/* modules */

io.on('connection', function(socket){
	
}).on('error', function(err){
	console.log(err);
});
/*******************************/

fs.mkdir('data', function(err){
	console.log('mkdir...');
	console.log(err);
});

setInterval(function(){
	var dl = new downloader();
	dl.downloadArtist();
}, 1000 * 60 * 24);