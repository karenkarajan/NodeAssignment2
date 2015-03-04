var express = require('express');   //Express Web Server
var bodyParser = require('body-parser'); //connects bodyParsing middleware
var path = require('path');     //used for file path


var app = express();
app.use(express.static(path.join(__dirname, 'public')));

/* ==========================================================
 bodyParser() required to allow Express to see the uploaded files
 ============================================================ */
app.use(bodyParser({defer: true}));

//Bootstrap routes
require('./lib/config/routes')(app);


app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
});


var NODE_ENV='development';
var env = process.env.NODE_ENV;


// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});
