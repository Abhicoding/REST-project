const express = require('express')
const router = express.Router()
const playerCtrl = require('../controller/player')

router.get('/details', playerCtrl.player)
router.get('/swapi', playerCtrl.swapi)

module.exports = router
