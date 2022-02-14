const systems = (connection, Sequelize) => {
  return connection.define('systems', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    gameSystem: { type: Sequelize.STRING, allowNull: false }
  })
}

module.exports = systems
