const mysql = require('mysql')
let dbBase = {},
  pool
const init = (options) => {
  const o = {
    host: options.host || '127.0.0.1',
    user: options.user || 'root',
    password: options.password || '',
    database: options.database
  }
  dbBase = Object.assign(o)
  pool = mysql.createPool(dbBase)
}

const query = (sql, values, db = '') => {
  if (Object.keys(dbBase).length === 0) throw Error('use query should init dbBase')
  if (db) init({
    database: db
  })
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = {
  init,
  query
}