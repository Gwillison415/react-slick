export class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }
  findNode = (searchValue) => {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === searchValue) {
        return this.nodes[i];
      }
      const nestedNode = this.findChild(this.nodes[i], searchValue);
      if (nestedNode) {
        return nestedNode;
      }
    }
    return null;
  };

  findChild = (node, value) => {
    return node.children.find((child) => child.value === value);
  };
  addChild = (parent, value) => {
    const parentNode = this.findNode(parent);
    if (!this.findNode(value)) {
      parentNode.addChild(value);
    }
  };
  addNode = (value) => {
    if (this.findNode(value) !== null) {
      return;
    }
    const newNode = new GraphNode(value);
    this.nodes.push(newNode);
    console.log("this.nodes", this.nodes);
    return newNode;
  };
  findNeighbors = (value) => {
    let edgeNodes = new Set();

    this.edges.forEach((edge) => {
      let source = edge.first.value;
      let destination = edge.second.value;
      if (source === value) edgeNodes.add(this.findNode(destination));
      if (destination === value) edgeNodes.add(this.findNode(source));
    });
    return [...edgeNodes];
  };

  addEdge = (source, destination) => {
    const first = this.findNode(source);
    let second = this.findNode(destination);
    console.log("source", source);
    console.log("destination", destination);
    console.log("first", first);
    console.log("second", second);
    console.log("this.nodes", this.nodes);
    if (first === null) {
      return [false, "must have a source and destination"];
    } else if (second === null) {
      second = this.addNode(destination);
    }
    if (first === second) {
      console.log("first === second");

      //we have the simplest loop
      return [false, "no simple loops"];
    }
    // if the destination is trying to connect to a source, we have a problem
    const nodesConnectedToDestination = this.findNeighbors(destination);
    const nodesConnectedToSource = this.findNeighbors(source);
    console.log("nodesConnectedToSource", nodesConnectedToSource);
    console.log("nodesConnectedToDestination", nodesConnectedToDestination);
    if (nodesConnectedToDestination) {
      if (nodesConnectedToDestination.includes(first)) {
        // the destination is connected to the source node
        console.log("the destination is connected to the source node");

        return [false, "the destination is connected to the source node"];
      }
    }
    if (nodesConnectedToSource) {
      if (nodesConnectedToSource.includes(first)) {
        // the destination is connected to the source node
        console.log("the destination is connected to the source node");

        return [false, "the destination is connected to the source node"];
      }
    }
    this.edges.push(new GraphEdge(first, second));
    return [true, "new node added"];
  };

  dataDump = () => {
    console.log("dump -=-=this.nodes", this.nodes);

    return [this.nodes, this.edges];
  };
  print = () => {
    for (let i = 0; i < this.edges.length; i++) {
      let edge = this.edges[i];
      console.log(edge.first.value, "->", edge.second.value, edge.weight, "mi");
    }
  };
}

class GraphNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild = (nodeValue) => {
    const newNode = new GraphNode(nodeValue);
    console.log("addchild node", newNode);
    this.children.push(newNode);
  };
}
class GraphEdge {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}
