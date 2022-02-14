const games = (connection, Sequelize, systems) => {
  return connection.define('games', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    gameSystemId: { type: Sequelize.INTEGER, references: { model: systems, key: 'id' } },
    genre: { type: Sequelize.STRING, allowNull: false },
    yearReleased: { type: Sequelize.INTEGER, allowNull: false },
    multiplayer: { type: Sequelize.STRING, allowNull: false },
  }, { paranoid: true })
}

module.exports = games
