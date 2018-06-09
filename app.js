const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const playerRoutes = require('./routes/player')
const teamRoutes = require('./routes/team')

app.use(bodyParser.json())

app.use('/api/player', playerRoutes)
app.use('/api/team', teamRoutes)

app.use((req, res, next) => {
  res.status(200).json({
    message: 'It works!'
  })
})

module.exports = app
