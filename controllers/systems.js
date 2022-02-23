const models = require('../models')

const getAllSystems = async (request, response) => {
  const systems = await models.Systems.findAll()

  return response.send(systems)
}

module.exports = getAllSystems
