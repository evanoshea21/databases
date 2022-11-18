var db = require('../db');
// db.connection;

module.exports = {
  getAll: function (cb) { //interact with database?

  db.connection.query(
    'SELECT * FROM messages', // WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields) {
      if(err) {
        console.log('error in db index.js -> ', err);
        cb(err);
      } else {
        console.log('RESULTS HERE db Index.js-> ', results); // results contains rows returned by server
        cb(null, results); //send data back to controllers
      }
      // console.log('FIELDS HERE->   ', fields); // fields contains extra meta data about results, if available
    }
  );
  }, // a function which produces all the messages
  create: function (requestBody, cb) { //requestBody => JSON message
//  let idRoom = `SELECT id from rooms WHERE roomName = ${requestBody.roomname}`;
// .query('sql string', function(){ });
//(SELECT id from rooms WHERE roomName = ${requestBody.roomname})
//  var roomid = undefined;
//  var userid = undefined;

 db.connection.query(
  `SELECT id from rooms WHERE roomName = "${requestBody.roomname}"`,
  (err, results) => {
    if(err) {
      console.log('error in idRoom query', err);
    }
    // console.log('RoomId Results (1?)', results);
    // console.log('TYPEOF', typeof results);
    // console.log('Keys', Object.keys(results));
    // console.log('JSON Stringify', JSON.stringify(results));
    // console.log('ID ------>', results['0'].id);
    // rooomid = results;
    console.log('Results of post request->', results);
    // userQuery(results['0'].id);
  }
)
function userQuery (roomid) {
  db.connection.query(
    `SELECT id from users WHERE username = "${requestBody.username}"`,
    (err, results) => {
      if(err) {
        console.log('error in idUser query');
      }
      // console.log('UserId Results (1?)', results);
      // console.log('User ID ----------->', results['0'].id);

      // userid = results;
      finalQuery(roomid, results['0'].id);
    }
  )
}

function finalQuery(roomid, userid) {
  // console.log(`finalQuery\nRoom: ${room['0'].id}, User: ${user['0'].id}`);
  db.connection.query(
      `INSERT INTO messages (messageText, room_id, username_id) VALUES (? , ?, ?)`,
      [requestBody.text, roomid, userid],
      (err, results) => {
        if (err) {
          console.log('Error?', err);
          cb('Error in models/messages ->', err);
        } else {
          // console.log('results from createQuery in models/messages -> ', results);
          cb();
        }

      }
    );//queryEnds
}//FINAL QUERY



    // var $createMessage = {
    //   username: $user,
    //   text: $message,
    //   roomname: 'Lobby',
    //   github_handle: 'evan'
    // };
  } // END CREATE a function which can be used to insert a message into the database
};

//=============NOTES BELOW

  //   app.post('/data', function(req, res){
  //     var username=req.body.name;

  //     connection.query("INSERT INTO `names` (name) VALUES (?)", username.toString(), function(err, result){
  //         if(err) throw err;
  //             console.log("1 record inserted");
  //         });
  //     res.send(username);
  // });

  // VALUES ('hey there', (SELECT id from rooms where roomName = requestBody.roomname), (SELECT id from users WHERE name = requestBody.username))

    // var $createMessage = {
    //   message_id: undefined,
    //   username: $user,
    //   text: $message,
    //   roomname: 'Maddie and Evan',
    //   github_handle: 'evan'
    // };
