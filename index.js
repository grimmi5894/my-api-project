/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index')
})

app.get('/games', () => {})

app.get('/games:title', () => {})

app.get('games/:system', () => {})

app.use(bodyParser.json())

app.post('/games', () => {})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337')
})
