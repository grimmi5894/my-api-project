/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const { getAllGames, getGameByIdentifier } = require('./controllers/games')
const getAllSystems = require('./controllers/systems')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index')
})

app.get('/systems', getAllSystems)

app.get('/games', getAllGames)

app.get('/games/:identifier', getGameByIdentifier)

app.post('/games', bodyParser.json(), () => {})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337')
})
