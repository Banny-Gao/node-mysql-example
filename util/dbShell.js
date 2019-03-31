// 打印脚本执行日志
const eventLog = function (err, sqlFile, index) {
  if (err) {
    console.log(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败 o(╯□╰)o ！`)
  } else {
    console.log(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 O(∩_∩)O !`)
  }
}
const runShellTables = async (sqlContentMap, query) => {
  const table = {}
  for (let [key, sqlShell] of Object.entries(sqlContentMap)) {
    const val = await new Promise((resolve) => {
      runShell(sqlShell, query, (result, i) => {
        if (result.serverStatus * 1 === 2) {
          eventLog(null, key, i)
        } else {
          eventLog(true, key, i)
        }
        resolve(result)
      })
    })
    table[key] = val
  }
  console.log('所有sql脚本执行结束！')
  return table
}

const runShell = async (sqlShell, query, fn) => {
  const table = []
  const sqlShellList = sqlShell.split(';')
  for (let [i, shell] of sqlShellList.entries()) {
    if (shell.trim()) {
      const result = await query(shell)
      table.push(result)
      if (fn && fn instanceof Function) fn(result, i)
    }
  }
  return table
}

module.exports = {
  runShellTables,
  runShell
}