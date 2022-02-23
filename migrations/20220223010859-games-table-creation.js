module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('games', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING, allowNull: false },
      genre: { type: Sequelize.STRING, allowNull: false },
      yearReleased: { type: Sequelize.INTEGER, allowNull: false },
      multiplayer: { type: Sequelize.STRING, allowNull: false },
      systemId: { type: Sequelize.INTEGER, references: { model: 'systems', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('games')
  }
}
