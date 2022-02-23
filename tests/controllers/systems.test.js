const { describe, it } = require('mocha')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const getAllSystems = require('../../controllers/systems')
const mockSystemList = require('../mocks/systems')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers-systems', () => {
  describe('getAllSystems', () => {
    it('gets a list of all game systems from database and returns JSON using response.send()', async () => {
      const stubbedFindAll = sinon.stub(models.Systems, 'findAll').returns(mockSystemList)
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getAllSystems({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(mockSystemList)
    })
  })
})
