const mysql = require('mysql')
// 创建会话
// const connection = mysql.createConnection({
//   host: '127.0.0.1', // 数据库地址
//   user: 'root', // 数据库用户
//   password: '', // 数据库密码
//   database: 'koadb' // 选中数据库
// })

// connection.connect();

// connection.query('SELECT * FROM test_tbl', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The result is: ', results);
// });

// connection.end();


// 创建数据池
const pool = mysql.createPool({
  host: '127.0.0.1', // 数据库地址
  user: 'root', // 数据库用户
  password: '', // 数据库密码
  database: 'koadb' // 选中数据库
})

// 在数据池中进行会话操作
pool.getConnection(function (err, connection) {

  connection.query('SELECT * FROM test_tbl', (error, results, fields) => {
    console.log(results)
    // 结束会话
    connection.release();

    // 如果有错误就抛出
    if (error) throw error;
  })
})