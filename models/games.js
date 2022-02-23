// const systems = require('./systems')

const games = (connection, Sequelize, Systems) => {
  return connection.define('games', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    genre: { type: Sequelize.STRING, allowNull: false },
    yearReleased: { type: Sequelize.INTEGER, allowNull: false },
    multiplayer: { type: Sequelize.STRING, allowNull: false },
    systemId: { type: Sequelize.INTEGER, references: { model: Systems, key: 'id' } }
  })
}

module.exports = games
