const Sequelize = require('sequelize')
const gamesModel = require('./games')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const games = gamesModel(connection, Sequelize)

module.exports = {
  games,
  Op: Sequelize.Op
}
