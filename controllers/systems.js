const models = require('../models')

const getAllSystems = async (request, response) => {
  try {
    const systems = await models.Systems.findAll()

    return response.send(systems)
  } catch (error) {
    return response.status(500).send('Unable to retrieve systems, please try again')
  }
}

module.exports = getAllSystems
