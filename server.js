var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Require Routes js
var routesHome = require('./routes/home');
var routesTodo = require('./routes/todo');
var routesComment = require('./routes/comment');

// Serve static files
app.use(express.static(__dirname + '/'));

// Page Routes
app.use('/', routesHome);
app.use('/todo', routesTodo);
app.use('/comment', routesComment);

// View Engine To ejs
app.set('view engine', 'ejs');

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);