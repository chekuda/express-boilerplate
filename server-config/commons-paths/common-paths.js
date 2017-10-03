//In order to gather all the paths in the same file
const path = require('path')
const MAIN_ROOT = '../../'

module.exports = {
  staticFilesFolder: path.resolve(__dirname, `${MAIN_ROOT}/public`),
  serviceFiles: path.resolve(__dirname, `${MAIN_ROOT}/serviceFiles`),
}