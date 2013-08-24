var gadj = require('../')

var example = {
  'This is\nan element': ['b', 'c'],
  'b': ['f'],
  'c': ['e', 'd'],
  'd': [],
  'e': [],
  'f': ['g'],
  'g': []
}

var graph = gadj.from(example)

console.log(graph.toString())
console.log(gadj.to(graph))

require('assert').deepEqual(gadj.toAdjacency(graph), example)
