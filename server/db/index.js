var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// connection.query(
//   'SELECT * FROM `chat`', // WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log('RESULTS HERE db Index.js-> ', results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

exports.connection = connection;
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


