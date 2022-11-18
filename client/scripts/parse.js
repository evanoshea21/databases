// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.



//   <style>
//   h1 {color:red;}
//   p {color:blue;}
// </style>
//<p style="background-image: url('img_girl.jpg');"></p>

var Parse = {


  // server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  server: 'http://127.0.0.1:3000',
//   getDataToHack: function(url) {
//     scriptT = "<body style=background-image: url(\'" + url + ");></body>"
//     console.log("Style tag:   ", scriptT);
//     Parse.readAll((data) => {
//       Parse.hack(data[0], scriptT, () => {
//        console.log('Hacked Everyone;s background..?');
//       })})
//     },

// //   // go to this particular server => chatterbox => messages (if you waned to get users, you would replace messages with 'users')
// //   // Q-10:21: how do we know what the endpoints are? depends on whether the API is public or not (you would have to read the documumentation for that API e.g. Github REST API)
// //   // Evan: you can both POST and GET to the same url and it'll have two different functions
//   hack: function(indivMessage, scriptTag, successCB, errorCB = null) {
//     $.ajax({
//       url: Parse.server,
//       type: 'PUT',
//       contentType: 'application/json',
//       data: indivMessage.name = scriptTag,
//       success: successCB,
//       error: errorCB || function(error) {
//         console.error('chatterbox: Failed to fetch messages', error);
//       }
//     });
//   },

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message

    $.ajax({
      url: Parse.server + '/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB/*(message)*/,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({ // takes in an object (when there's multiple parameters)
      url: Parse.server, // the parse api or other website to which we want to send a request
      type: 'GET', // HTTP verb - tells the server what action to take
      data: { order: '-createdAt' }, // data sent to the server, which specifies extra options for how the 'get' should happen
      contentType: 'application/json', // MIME-type (e.g. application/mc-doc) format of content that you are providing to the server
      // dataType: 'application/json', // format of content that you expect from the server
      success: successCB, // this is a callback function because AJAX has to be asynchronous => this CB will run after successful completion of the AJAX request
      // Comment: Call Parse.readAll(CB) => successfully get data => do something about the data by calling successCB
      // success: function(data) { // this function recieves data that comes back from the server
      // }
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      } // anything in the 400-500 range will trigger an error function
    });
  }

};
// // Normal JS format
// setTimeout(function(){
//   console.log(5);
// }, 2000) // setTimeout will run the CB in the future

// // AJAX equivalent (you do not supply a time)
// $.ajax({
//   success: function(){
//     console.log(5);
//   }
// })

// CSRF
// 1. Only permit scripts originating from the same site
// XSS is still possible because they can take the script in-site and inject it into another hacker script => make sure you 'sanitize' your script before adding it to the page

// In this sprint, you will be requesting access to a third party server
// Same origin policy will only block information from being downloaded, not SCRIPT TAGS
// Hackers:
// Best method: CORS (server: 'don't block this particular request, I'm going to send them the data and its okay'). Servers can 'opt in' to sending the correct headers so the server can temp switch off 'same origin policy'
  // For this sprint: use APIS that support CORS, watch out for XSS attacks, be mindful of the fact that there are 'same origin policies' built into the browser that are going to protect your users but might get in the way of the information you need from the parse server
// iframes allow you to embed a whole other website into another website
// JSONP sends you back a script tag that contains the JSON which you then have to run (pads it in a function that can run once loaded)

// Q-1:10:18: What's the vulnerability with sending get requests and post requests to the parse API?
// A: Same origin policy is not as much going to open you up to vulnerability as its something that could get in the way of using third-party APIs (not an issue for parse)
// Once you start talking to third-party servers and take information from them to integrate into your page, you are now opening yourself up to XSS attacks, you might trust the managing people at parse but you cannot trust the users of parse (classmates) to not put something malicious into your script tags (you are taking data that you don't have control over, so you want to treat that with extreme caution and suspicion)