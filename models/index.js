const Sequelize = require('sequelize')
const gamesModel = require('./games')
const allConfigs = require('../configs/sequelize')
const systemsModel = require('./systems')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const systems = systemsModel(connection, Sequelize)
const games = gamesModel(connection, Sequelize, systems)

games.belongsTo(systems)
systems.hasMany(games)

module.exports = {
  games,
  systems,
  Op: Sequelize.Op
}
