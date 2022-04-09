module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('systems', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      gameSystem: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('systems')
  }
}
