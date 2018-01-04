/*  OLD
var gun = Gun().get('users');
function addNewUser (name, age, gender){
    //generate key for user
}*/
var gun = Gun();
var user = gun.user();

// Browser Native Web Crypto API is used to PBKDF2 the password.
user.create('alice', 'unsafepassword', function(ack){
    // done creating user!
});

// log in
user.auth('alice', 'unsafepassword', function(ack){
    // logged in!
});

var alice = {name: "Alice"};
alice.boss = {name: "Fluffy", species: "Kitty", slave: alice};
user.get('profile').put(alice);

// var users = gun.get('users');
/*
$('form').on('submit', function(e){
    e.preventDefault();
    gun.set($('input').val());
    $('input').val('');
});

gun.map().on(function(user, id){
    var li = $('#' + id).get(0) || $('<li>').attr('id', id).appendTo('ul');
    if(user){
        $(li).text(user);
    }else{
        $(li).hide();
    }
    $('body').on('dbclick', 'li', function(e){
        gun.get(this.id).put(null);
    });
});*/

