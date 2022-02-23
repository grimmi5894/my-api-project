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
})
