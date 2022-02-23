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

module.exports = { getAllGames, getGameByIdentifier }
