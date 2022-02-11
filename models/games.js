const games = (connection, Sequelize) => {
  return connection.define('games', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    gameSystem: { type: Sequelize.STRING, allowNull: false },
    genre: { type: Sequelize.STRING, allowNull: false },
    yearReleased: { type: Sequelize.INTEGER, allowNull: false },
    multiplayer: { type: Sequelize.STRING, allowNull: false }
  })
}

module.exports = games
