// connects gun-server.js
var gun = Gun('http://localhost:4747/gun');
var user = gun.user && gun.user();

var login = $('#login_name').val();
var log_pass =$('#login_pass').val();

// log in
function doLogin() {
    user.auth(login, log_pass, function (ack) {
        // logged in!
        if(user) {
            alert('Welcome ' + login);
        }
    });
}

// write data from user account
/*
var alice = {name: "Alice"};
alice.boss = {name: "Fluffy", species: "Kitty", slave: alice};
user.get('profile').put(alice);
*/
