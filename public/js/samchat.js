$(document).ready(function(){

  console.log('ready');

  var socket = io();

  $('form').submit(function(){
    socket.emit('chat message', $('#name').val() + ': ' + $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });

})