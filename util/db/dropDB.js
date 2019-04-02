const mysql = require('mysql')

const dropDB = (db, options = {}) => {
  const o = {
    host: options.host || '127.0.0.1',
    user: options.user || 'root',
    password: options.password || '',
  }
  const connection = mysql.createConnection(o)
  if (!db) return connection.end()
  return new Promise((resolve, reject) => {
    connection.query(`DROP DATABASE ${db}`, (err, result) => {
      if (err) reject(err)
      resolve(result)
      connection.end()
    })
  })
}

module.exports = dropDB