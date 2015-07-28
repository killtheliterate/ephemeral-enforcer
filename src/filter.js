import {curry, filter, partial} from 'lodash-fp'
import debug from 'debug'

const log = debug('ephembot:filter')
log.log = console.log.bind(console)

const postList = curry(function postList (filters, history) {
  return history.then(function (messages) {
    return filter(partial(applyFilters, filters), messages)
  })
})

function applyFilters (filters, message) {
  for (var [type, filter] of filters) {
    if (message[type] === filter) {
      return false;
    }
  }

  return true;
}

// export
// ---------------------------------------------------------------------------

exports = module.exports = function () { return postList }
