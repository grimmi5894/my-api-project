/* eslint-disable no-console */
const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const { getAllGames, getGameByIdentifier, saveNewGame } = require('./controllers/games')
const getAllSystems = require('./controllers/systems')

const app = express()

app.set('view engine', 'pug')
// app.use(express.static('public'))
app.use(cors())
app.use(express.static('client/build'))

app.get('/api', (request, response) => {
  return response.render('index')
})

app.get('/api/systems', getAllSystems)

app.get('/api/games', getAllGames)

app.get('/api/games/:identifier', getGameByIdentifier)

app.post('/api/games', bodyParser.json(), saveNewGame)

/* app.all('*', (request, response) => {
  return response.sendStatus(404)
})*/
app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337')
})
