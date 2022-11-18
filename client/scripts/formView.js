// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

$('.submit').on('click', function(event) {
  var $message = $('#message').val();
  var $user = $('#username').val();
  //text field Roomname .val()
  var $createMessage = {
    message_id: undefined,
    username: $user,
    text: $message,
    roomname: 'Maddie and Evan',
    github_handle: 'evan'
  };
  MessagesView.render();
  FormView.handleSubmit(event, $createMessage);
});

$('#refresh').on('click', function(event) {
  event.preventDefault();
  $('#chats').empty();
  App.fetch();
  RoomsView.render(); // new added rooms to be updated when 'refreshed'
  });

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event, message) {
    // Stop the browser from submitting the form
    event.preventDefault(); // prevents page from refresh

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    console.log('click!');
    Messages._data.push(message);
    Parse.create(message, () => {
      console.log('ajax request successful', message);
    MessagesView.renderMessage(message);

  })
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};