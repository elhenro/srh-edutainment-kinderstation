// connects gun-server.js
var gun = Gun('http://localhost:4747/gun');
var user = gun.user();

var login = $('#login_name').val();
var log_pass =$('#login_pass').val();

// log in
function doLogin() {
    user.auth(login, log_pass, function (ack) {
        console.log('Authorized');
        gun.get('pub/' + ack.pub).put({hello: 'world'});
    });
}

// write protected data from user account
/*
var alice = {name: "Alice"};
alice.boss = {name: "Fluffy", species: "Kitty", slave: alice};
user.get('profile').put(alice);
*/
