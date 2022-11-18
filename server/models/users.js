var db = require('../db');

module.exports = {
  getAll: function (name, callback) {

    //query to get josh's id from users
    db.connection.query(`SELECT id FROM users WHERE username = "${name}"`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        console.log('Data from first User Query', data['0'].id);

        finalQuery(data['0'].id);
      }
    })
    //select * messagesText from messages where
        //   userid(2)=(select id from users where username = 'Josh')

  function finalQuery(id) {
    db.connection.query(
      `SELECT * from messages where username_id = ${id}`,
      (err, results) => {
        if(err) {
          callback(err);
        } else {
          console.log('messages from Josh--->', results);
          // callback(results);
        }
      }
    )
  }

  },
  create: function () {

  }
};
