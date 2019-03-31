const fs = require('fs'),
  path = require('path')
/**
 * 遍历目录下的文件
 * @param {string} pathResolve  需要遍历的路径
 * @param {stiring} mime 文件的后缀名
 * @return {object} 
 */

const walkFile = (pathResolve, mime) => {
  const files = fs.readdirSync(pathResolve)
  let fileList = {}
  for (let item of files) {
    const itemMime = path.extname(item)
    if (mime === itemMime) {
      fileList[item] = pathResolve + item
    }
  }
  return fileList
}

module.exports = walkFile