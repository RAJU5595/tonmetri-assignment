const mysql = require('mysql');

const connectionPool = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'internship'
});

connectionPool.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connectionPool.threadId);
  });

module.exports = connectionPool;
