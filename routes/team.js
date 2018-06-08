const express = require('express')
const router = express.Router()
const teamCtrl = require('../controller/team')

router.get('/details', teamCtrl.team)

module.exports = router
