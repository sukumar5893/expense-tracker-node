require('./db')
const app = require('express')()
const bodyParser = require('body-parser')

const usersController = require('./controllers/usersController')
const authController = require('./controllers/authController')


app.use(bodyParser.json())

app.use('/users', usersController)

app.use('/', authController)





module.exports = app;