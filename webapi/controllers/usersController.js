const express = require('express')
const controller = express.Router()
let users = require('../data/database')

module.exports = controller