// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // Messages._data.forEach(function(item) {
    //   this.renderMessage(item);
    // })
    this.$chats.empty();
    for (var i = 0; i < Messages._data.length; i++) {
      this.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) { //
    // TODO: Render a single message.
    var htmlStr = MessageView.render(message);
    if (message.text !== null && message.user !== null) {
      this.$chats.append(htmlStr);
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};