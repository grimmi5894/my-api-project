module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('systems', [
      { gameSystem: 'Nintendo' },
      { gameSystem: 'Super Nintendo' },
      { gameSystem: 'Playstation' },
      { gameSystem: 'Xbox 360' }
    ])
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('systems')
  }
}
