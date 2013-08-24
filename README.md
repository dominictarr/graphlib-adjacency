# graphlib-adjacency

Convert to graphlib or from adjacency list, and vice versa.

[![travis](https://travis-ci.org/dominictarr/graphlib-adjacency.png?branch=master)
](https://travis-ci.org/dominictarr/graphlib-adjacency)

[![testling](http://ci.testling.com/dominictarr/graphlib-adjacency.png)
](http://ci.testling.com/dominictarr/graphlib-adjacency)

## Example

``` js
var ga = require('graphlib-adjacency')
var graph = ga.toGraph({
  'This is\nan element': ['b', 'c'],
  'b': ['f'],
  'c': ['e', 'd'],
  'd': [],
  'e': [],
  'f': ['g'],
  'g': []
})

console.log(ga.toAdjacency(graph))
```

## License

MIT
