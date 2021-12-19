/* eslint-disable no-console */
const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337')
})
