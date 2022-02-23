const Sequelize = require('sequelize')
const GamesModel = require('./games')
const SystemsModel = require('./systems')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Systems = SystemsModel(connection, Sequelize)
const Games = GamesModel(connection, Sequelize, Systems)

Games.belongsTo(Systems)
Systems.hasMany(Games)

module.exports = {
  Games,
  Systems,
  Op: Sequelize.Op
}
