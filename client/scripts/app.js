// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) { // default value
    callback();

    Parse.readAll((data) => {
      // examine the response from the server request:

      console.log(data);
      Messages._data = data;
      MessagesView.render();
      RoomsView.initialize();

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
    // Parse.getDataToHack('https://google.com');
    // Added comment: the first callback takes the data we recieved back from the server and console logs it
    // THIS IS THE SUCCESS FUNCTION WE ARE FIRING
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
