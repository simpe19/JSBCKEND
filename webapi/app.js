const port = process.env.WEBAPI_PORT || 5000
const initMongoDB = require('./mongodb')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true} ))
app.use(bodyParser.json())


const productsController = require('./controllers/productsController')
app.use('/api/products', productsController)


const usersController = require('./controllers/usersController')
app.use('/api/users', usersController)

initMongoDB()
app.listen(port, () => console.log(`Web Api is running on http://localhost:${port}`))