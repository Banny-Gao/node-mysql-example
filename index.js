const dbController = require('./util/db'), //数据库操作控制器
  {
    getSqlContent, //获取牧歌路径下sql文件内容
    getSqlContentMap //获取sql目录下所以sql文件内容
  } = require('./util/get-sql-content-map'),
  {
    runShell, //单个sql文件执行
    runShellTables //整个sql目下sql执行
  } = require('./util/dbShell'),
  {
    query_of_db, //{init,query} => 操作已有数据库
    createDB //创建新的数据库
  } = dbController

//需要先初始化要操作的数据库
query_of_db.init({
  database: 'koadb'
})

const data_sql = getSqlContent('./sql/data.sql')
const sqlContentMap = getSqlContentMap()

//创建数据库
// createDB('mydb').then((result) => {
//   console.log('success =====', result)
// }).catch(err => {
//   console.log('failed ======', err)
// })


//执行单个sql文件
// const data = runShell(data_sql, query_of_db.query, (res, i) => {
//   console.log(res)
// }) 
// data.then(res => {
//   console.log(res)
// })

//执行整个sql目录下的文件
// const data = runShellTables(sqlContentMap, query_of_db.query) //执行sql目录下的所有sql文件
// data.then(res => {
//   console.log(res)
// })