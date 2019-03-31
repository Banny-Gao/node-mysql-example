const fs = require('fs'),
  getSqlMap = require('./get-sql-map')

let sqlContentMap = {}

/**
 * 读取sql文件内容
 * @param {string} fileName 
 * @param {string} path
 * @return {string}
 */

const getSqlContent = (path, fileName) => {
  const content = fs.readFileSync(path, 'utf8')
  if (fileName) sqlContentMap[fileName] = content
  return content
}

const getSqlContentMap = () => {
  const sqlMap = getSqlMap()
  for (let [key, value] of Object.entries(sqlMap)) {
    getSqlContent(value, key)
  }
  return sqlContentMap
}

module.exports = {
  getSqlContent,
  getSqlContentMap
}