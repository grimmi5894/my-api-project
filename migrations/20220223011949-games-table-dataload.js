module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('games', [
      {
        title: 'Super Mario Bros', genre: 'action/adventure', yearReleased: 1985, multiplayer: 'yes', systemId: 1
      },
      {
        title: 'Final Fantasy', genre: 'rpg', yearReleased: 1990, multiplayer: 'no', systemId: 1
      },
      {
        title: 'Donkey Kong', genre: 'action/adventure', yearReleased: 1986, multiplayer: 'no', systemId: 1
      },
      {
        title: 'Dr. Mario', genre: 'puzzles/strategy', yearReleased: 1990, multiplayer: 'yes', systemId: 1
      },
      {
        title: 'Dragon Warrior', genre: 'rpg', yearReleased: 1989, multiplayer: 'no', systemId: 1
      },
      {
        title: 'Super Mario World', genre: 'platform', yearReleased: 1991, multiplayer: 'yes', systemId: 2
      },
      {
        title: 'Final Fantasy 2', genre: 'rpg', yearReleased: 1991, multiplayer: 'yes', systemId: 2
      },
      {
        title: 'Monopoly', genre: 'board game', yearReleased: 1991, multiplayer: 'yes', systemId: 2
      },
      {
        title: 'Kirbys Dreamland 3', genre: 'platform', yearReleased: 1997, multiplayer: 'yes', systemId: 2
      },
      {
        title: 'Secret of Mana', genre: 'rpg', yearReleased: 1993, multiplayer: 'no', systemId: 2
      },
      {
        title: 'Final Fantasy VII', genre: 'rpg', yearReleased: 1997, multiplayer: 'no', systemId: 3
      },
      {
        title: 'Tomb Raider', genre: 'action/adventure', yearReleased: 1996, multiplayer: 'no', systemId: 3
      },
      {
        title: 'Tony Hawks Pro Skater 2', genre: 'sports', yearReleased: 2000, multiplayer: 'yes', systemId: 3
      },
      {
        title: 'Tekken', genre: 'fighting', yearReleased: 1995, multiplayer: 'yes', systemId: 3
      },
      {
        title: 'Bioshock', genre: 'first person shooter', yearReleased: 2007, multiplayer: 'no', systemId: 4
      },
      {
        title: 'Rock Band', genre: 'rhythm game', yearReleased: 2007, multiplayer: 'yes', systemId: 4
      },
      {
        title: 'Burnout Revenge', genre: 'racing', yearReleased: 2008, multiplayer: 'yes', systemId: 4
      },
      {
        title: 'Fable II', genre: 'rpg', yearReleased: 2008, multiplayer: 'no', systemId: 4
      },
      {
        title: 'Laura Croft:Tomb Raider', genre: 'action/adventure', yearReleased: 2013, multiplayer: 'yes', systemId: 4
      }
    ])
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('games')
  }
}
