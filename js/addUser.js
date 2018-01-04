var gun = Gun('http://localhost:4747/gun');
var user = gun.user();
// get user name and pass values from frontend
var name = $('#name_in').val();
var pass = $('#pass_in').val();
// Browser Native Web Crypto API is used to PBKDF2 the password.
function CreateUser() {
    var user = gun.user(name);
    user.create(name, pass, function (ack) {
        // done creating user!
        alert('Willkommen ' + name);
    });
}
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

