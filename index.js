const dbController = require('./util/db'), //数据库操作控制器
  {
    getSqlContent, //获取某个路径下sql文件内容
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



// const drop_table = getSqlContent('./sql/createTbale.sql') //创建表
// const drop_table = getSqlContent('./sql/dropTable.sql') //删除表
// const drop_table = getSqlContent('./sql/insert.sql') //创建表并插入数据
const drop_table = getSqlContent('./sql/select.sql') //查询数据
const sqlContentMap = getSqlContentMap()

//创建数据库
// createDB('mydb').then((result) => {
//   console.log('success =====', result)
// }).catch(err => {
//   console.log('failed ======', err)
// })



//需要先初始化要操作的数据库
query_of_db.init({
  database: 'mydb'
})
//执行单个sql文件
runShell(drop_table, query_of_db.query, (result, index) => { //第几条sql语句执行完成回调函数
  // console.log(result, index)
}).then(res => { //整个sql文件执行完成回调
  console.log(res)
})

//执行整个sql目录下的文件
// const data = runShellTables(sqlContentMap, query_of_db.query) //执行sql目录下的所有sql文件
// data.then(res => {
//   console.log(res)
// })