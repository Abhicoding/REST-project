const express = require('express')
const router = express.Router()
const playerCtrl = require('../controller/player')

router.get('/details/:id', playerCtrl.getPlayer)
router.post('/details', playerCtrl.insertPlayer)
router.post('/details/:id', playerCtrl.removePlayer)

router.get('/starwars/:peopleNum', playerCtrl.swapi)

module.exports = router
