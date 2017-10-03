const express = require('express')
const bodyParser = require('body-parser')
const commonPaths = require('./server-config/commons-paths/common-paths')
const routes = require('./server-config/api/routes/routes')

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Serve static files
app.use(express.static(commonPaths.staticFilesFolder))

routes(app)

app.get('/', (req, res) => res.sendFile('index.html'))

app.listen(port)

console.log(`listening on port ${port}`)