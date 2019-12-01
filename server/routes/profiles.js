const express = require('express')
const router = express.Router()

const {
  search
} = require('../controllers/profiles')

router.post('/search', search)

module.exports = router
