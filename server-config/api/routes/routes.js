const listControllers = require('../controllers/controllers')

//API routes
module.exports = (app) => {
  app.route('/api/getgenericfile')
    .get(listControllers.getgenericfile)

  app.route('/api/specificfile/:file')
    .get(listControllers.specificfile)
}