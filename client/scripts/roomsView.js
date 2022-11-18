// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

$('.show-room').on('click', function(event) {
  // update room dropdown
  //pass in the room Selected
  var value = $('.dropdown').val();
  RoomsView.renderRoom(value);
});


var RoomsView = {
  $chats: $('#chats'),


  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  console.log('im here now, ', Messages._data);
    for(var i = 0; i < Messages._data.length; i++) {
      if (Rooms._data.indexOf(Messages._data[i].roomname) === -1) {
        Rooms._data.push(Messages._data[i].roomname);
      }
    }
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
  },

  render: function() {
    //EMPTY ROOMs
  //console.log('reaching here');
    $('.dropdown').empty();
    // TODO: Render out the list of rooms.
    for(var i = 0; i < Rooms._data.length; i++) {
      console.log('room length: ', Rooms._data[i]);
      var $option = $(`<option value="${Rooms._data[i]}">${Rooms._data[i]}</option>`);
      $option.appendTo('.dropdown');
    }
    // traversing rooms => going to room div => append a bunch of select options;
  },

  renderRoom: function(roomname) {
  //empty chats
  //go through all messages (Messages._data)
  //only appendTo dom, messages with roomname === roomname
  console.log('$chats', this.$chats);

    this.$chats.empty();
    for (var i = 0; i < Messages._data.length; i++) {
      if (roomname === Messages._data[i].roomname) {
        var htmlStr = MessageView.render(Messages._data[i]);
        this.$chats.append(htmlStr);
      }
    }
    // var htmlStr = MessageView.render(message);
    // if (message.text !== null && message.user !== null) {
    //   this.$chats.append(htmlStr);
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
