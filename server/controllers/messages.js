var models = require('../models');

module.exports = {
  get: function (req, res) { //this is the callback// SET STATUS CODE CORRECTLY, HEADEERS, RES.END
    models.messages.getAll((err, data) => {
      if(err) {
        res.end('(Not able to get messages--controllers/messages .get');
      } else {
        //stringify data?
        res.writeHead(200, {'content-type' : 'application/json'});
        // res.statusCode = 200;
        res.end(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // console.log('Request body-> ', req.body);
    models.messages.create(req.body, (err, data) => {
      if (err) {
        res.end('Message failed to send --controllers/messages post -> ');
      } else {
        res.end('Message sent');
      }

    });
  } // a function which handles posting a message to the database
};
