var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Require Routes js
var routesHome = require('./routes/home');
var routesTodo = require('./routes/todo');
var routesComment = require('./routes/comment');
var routesBoard = require('./routes/board');
var routesCounter = require('./routes/counter');

// Serve static files
app.use(express.static(__dirname + '/'));

// Page Routes
app.use('/', routesHome);
app.use('/todo', routesTodo);
app.use('/comment', routesComment);
app.use('/board', routesBoard);
app.use('/counter', routesCounter);

// View Engine To ejs
app.set('view engine', 'ejs');

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);