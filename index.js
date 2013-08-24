var Graph = require('graphlib').Graph


function empty (val) {
  if(!val) return true
  if(k in val) return false
  return true
}

exports.from = 
exports.toGraph = function (adjacency, opts) {
  opts = opts || {}
  var value = opts.getValue || function (node) {
    return node ? node.value : null
  }
  var edges = opts.getEdges || function (node) {
    if(Array.isArray(node))
      return node
    if(Array.isArray(node.edges || node.parents || node.children))
      return node.edges || node.parents || node.children
    return []
  }

  var graph = new Graph()
  graph.type = opts.type || 'digraph'
  //default to { [nodeid]: [edgelist] }
  for(var id in adjacency) {
    graph.addNode(id, value(adjacency))
  }

  for(var source in adjacency) {
    edges(adjacency[source]).forEach(function (target) {
      graph.addEdge(null, source, target, {})
    })
  }

  return graph
}

exports.to =
exports.toAdjacency = function (graph, hydrate) {
  var adj = {}
  hydrate = hydrate || function (value, edges) {
    if(empty(value)) return edges
    return {value: value, edges: edges}
  }
  graph.eachNode(function (id) {
    adj[id] = []
  })
  graph.eachEdge(function (id, source, target) {
    adj[source].push(target)
  })

  for(var id in adj)
    adj[id] = hydrate(graph.node(id), adj[id])

  return adj
}
