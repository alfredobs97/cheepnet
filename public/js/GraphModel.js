class GraphModel extends EventEmitter {
  constructor (nodes, links, username) {
    super()

    [this.nodes = [], this.links = [], this.twitterUser = ''] = [nodes, links, username]

    this.linksCounter = 0
  }

  setUsername (username) { // defensive programing here
    this.twitterUser = username
  }

  addNode (node) {
    this.nodes.push(node)
  }

  addLink (link) {
    this.links.push(link)
  }

  addNumFollowers (numFollowers) {
    this.numFollowers = numFollowers
  }

  sumCounter () {
    this.linksCounter++

    if (isGraphComplete(this.linksCounter, this.numFollowers)) this.emit('graphComplete')
  }
}

function isGraphComplete (followersCount, totalFollowers) {
  return followersCount === totalFollowers
}