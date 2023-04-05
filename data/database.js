const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'blog', // schema
  user: 'root',
  password: '*wish13241320'
});

module.exports = pool;