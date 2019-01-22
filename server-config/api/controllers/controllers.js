const commonPaths = require('../../commons-paths/common-paths')

exports.getgenericfile = (req, res) => {
  res.send('Jose')
  res.sendFile(`${commonPaths.serviceFiles}/generictestfile.json`)
}

exports.specificfile = (req, res) => {
  const file = req.params.file
  res.sendFile(`${commonPaths.serviceFiles}/specificFile/${file}.json`)
}