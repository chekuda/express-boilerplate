const api = require('./api')

// Routes
module.exports = (app) => {
  app.use('/api', api)
}