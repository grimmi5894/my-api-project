const mockGamesList = [
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
    title: 'Super Mario World', genre: 'platform', yearReleased: 1991, multiplayer: 'yes', systemId: 2
  },
  {
    title: 'Final Fantasy 2', genre: 'rpg', yearReleased: 1991, multiplayer: 'yes', systemId: 2
  }
]

const mockGame = {
  title: 'Final Fantasy VII', genre: 'rpg', yearReleased: 1997, multiplayer: 'no', systemId: 3
}

const mockPostGameData = {
  title: 'Burnout Revenge', genre: 'racing', yearReleased: 2008, multiplayer: 'yes', systemId: 4
}

const mockPostGameResponse = {
  id: 6,
  title: 'Burnout Revenge',
  genre: 'racing',
  yearReleased: 2008,
  multiplayer: 'yes',
  systemId: 4,
  createdAt: '2021-05-24T17:45:01.000Z',
  updatedAt: '2021-05-24T17:45:01.000Z',
  deletedAt: null
}

module.exports = { mockGamesList, mockGame, mockPostGameData, mockPostGameResponse }
