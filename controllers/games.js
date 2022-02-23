const models = require('../models')

const getAllGames = async (request, response) => {
  const games = await models.Games.findAll()

  return response.send(games)
}

const getGameByIdentifier = async (request, response) => {
  const { identifier } = request.params

  const game = await models.Games.findOne({
    where: {
      [models.Op.or]: [
        { id: { [models.Op.like]: `%${identifier}%` } },
        { title: { [models.Op.like]: `%${identifier}%` } },
        { genre: { [models.Op.like]: `%${identifier}%` } }]
    }
  })

  return game
    ? response.send(game)
    : response.sendStatus(404)
}

const saveNewGame = async (request, response) => {
  const {
    title, genre, yearReleased, multiplayer, systemId
  } = request.body

  if (!title || !genre || !yearReleased || !multiplayer || !systemId) {
    return response.status(400).send('All fields are required: title, genre, yearReleased, multiplayer, systemId')
  }

  const newGame = await models.Games.create({
    title, genre, yearReleased, multiplayer, systemId
  })

  return response.status(201).send(newGame)
}

module.exports = { getAllGames, getGameByIdentifier, saveNewGame }
