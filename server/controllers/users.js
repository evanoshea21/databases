var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('USERS GET');
    var user = req.body.username;
    models.users.getAll(user, (err, data) => {
      if(err) {
        res.end('Error could not get all users');
      } else {
        console.log('DATA --->', data);
        res.end();
      }
    })
  },
  post: function (req, res) {

  }
};
