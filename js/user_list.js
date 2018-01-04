var gun = Gun().get('users');

// var users = gun.get('users');

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
});


