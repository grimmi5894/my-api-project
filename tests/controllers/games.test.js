const {
  after, afterEach, before, beforeEach, describe, it
} = require('mocha')
const chai = require('chai')
const { createSandbox } = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { mockGamesList, mockGame, mockPostGameData, mockPostGameResponse } = require('../mocks/games')
const { getAllGames, getGameByIdentifier, saveNewGame } = require('../../controllers/games')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers-Games', () => {
  let response
  let sandbox
  let stubbedCreate
  let stubbedSend
  let stubbedSendStatus
  let stubbedFindAll
  let stubbedStatus
  let stubbedStatusDotSend

  before(() => {
    sandbox = createSandbox()

    stubbedCreate = sandbox.stub(models.Games, 'create')
    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedFindAll = sandbox.stub(models.Games, 'findAll')
    stubbedStatus = sandbox.stub()
    stubbedStatusDotSend = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus
    }
  })

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusDotSend })
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('getAllGames', () => {
    it('gets a list of all games from database and returns JSON using response.send()', async () => {
      stubbedFindAll.returns(mockGamesList)

      await getAllGames({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(mockGamesList)
    })
  })
  describe('getGameByIdentifier', () => {
    it('retrieves game associated with identifier from database and returns JSON using response.send()', async () => {
      stubbedFindAll.returns(mockGame)
      const request = { params: { identifier: 'Final Fantasy 2' } }
      const { identifier } = request.params

      await getGameByIdentifier(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({
        where: {
          [models.Op.or]: [
            { id: { [models.Op.like]: `%${identifier}%` } },
            { title: { [models.Op.like]: `%${identifier}%` } },
            { genre: { [models.Op.like]: `%${identifier}%` } },
            { systemId: { [models.Op.like]: `%${identifier}%` } }]
        },
        include: [{ model: models.Systems }]
      })
      expect(stubbedSend).to.have.been.calledWith(mockGame)
    })
  })
  describe('saveNewGame', () => {
    it('creates new game in db with data provided and returns 200 status and JSON for new record', async () => {
      stubbedCreate.returns(mockPostGameResponse)
      const request = { body: mockPostGameData }

      await saveNewGame(request, response)

      expect(stubbedCreate).to.have.been.calledWith(mockPostGameData)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedStatusDotSend).to.have.been.calledWith(mockPostGameResponse)
    })
    it('responds with 400 status and error message when not all required parameters are met', async () => {
      const request = {
        body: {
          title: mockPostGameData.title,
          genre: mockPostGameData.genre,
          multiplayer: mockPostGameData.multiplayer
        }
      }

      await saveNewGame(request, response)

      expect(stubbedCreate).to.have.callCount(0)
      expect(stubbedStatus).to.have.been.calledWith(400)
      // eslint-disable-next-line max-len
      expect(stubbedStatusDotSend).to.have.been.calledWith('All fields are required: title, genre, yearReleased, multiplayer, systemId')
    })
  })
})
