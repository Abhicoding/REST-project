const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const playerRoutes = require('./routes/player')
const teamRoutes = require('./routes/team')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api/player', playerRoutes)
app.use('/api/team', teamRoutes)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin X-Requested-With Content-Type, Accept, Authorization')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    return res.status(200).json({})
  }
  next()
})

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status(404)
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app
