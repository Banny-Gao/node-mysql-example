const path = require('path')
const walkFile = require('./walk-file')
/**
 * 获取sql目录文件数据
 */
const getSqlMap = () => {
  const dirname = path.dirname(__dirname)
  let basePath = dirname.replace(/\\/g, '\/')
  const pathArr = basePath.split('\/').splice(0)
  basePath = pathArr.join('/') + '/sql/'
  const fileList = walkFile(basePath, '.sql')
  return fileList
}

module.exports = getSqlMap