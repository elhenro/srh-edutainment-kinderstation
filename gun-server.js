var express = require('express');
var Gun = require('gun');

var app = express();

// serve ../gun.js
app.use(Gun.serve).use(express.static(__dirname));

// serve kids.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/front/kids.html');
});

// serve mod.html
app.get('/mod', function (req, res) {
    res.sendFile(__dirname + '/front/mod.html');
});

// register
app.get('/anmelden', function (req, res) {
    res.sendFile(__dirname + '/front/anmeldung.html')
})

// receive new user
// this can happen on client side thanks to SEA
/*gun.get('users').path(username).on(function(user){
    //if (user.exists)
});*/

var server = app.listen(4747);
Gun({file: 'data.json', web: server});