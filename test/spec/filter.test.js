/* global describe it beforeEach afterEach */

import _ from 'lodash-fp'
import {expect} from 'chai'

import messages from '../fixture/filter.fixture'
import fil from '../../src/filter'
const filterFactory = fil()

const filters = new Map([['subtype', 'pinned_item'], ['footype', 'foo_item']])

describe('filter', function () {
  it('should not fucking die', function(done) {
    const applyFilters = filterFactory(filters);

    applyFilters(messages).then(function(mess) {
      expect(mess.length).to.equal(8)
      done()
    }).catch(done)
  })
})
