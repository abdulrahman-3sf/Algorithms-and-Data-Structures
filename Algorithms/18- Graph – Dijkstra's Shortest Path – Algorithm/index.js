// Graph – Dijkstra's Shortest Path – Algorithm

class Vertex {
    name = '';
    visited = false;
    totalLength = 0;
    sourceOfTotalLength = null;
    vertexLinks = [];
}

class Edge {
    constructor(source, target, weight = 0) {
        this.source = source;
        this.target = target;
        this.weight = weight; // if we need weight for edge
    }
}

class Graph {
    constructor(names) {
        this.vertices = [];

        for (let i = 0; i < names.length; i++) {
            this.vertices[i] = new Vertex();
            this.vertices[i].name = names[i];
        }
    }

    addEdge(sourceIndex, targets) {
        for (let i = 0; i < targets.length; i++) {
            this.vertices[sourceIndex].vertexLinks[i] = new Edge(this.vertices[sourceIndex], this.vertices[targets[i]]);
        }
    }

    addEdge(sourceIndex, targets, weights) {
        for (let i = 0; i < targets.length; i++) {
            this.vertices[sourceIndex].vertexLinks[i] = new Edge(this.vertices[sourceIndex], this.vertices[targets[i]], weights[i]);
        }
    }

    resetVisited() {
        for (let vertex of this.vertices) {
            vertex.visited = false;
            vertex.totalLength = 0;
            vertex.sourceOfTotalLength = null;
        }
    }

    BFS() {
        let queue = [];

        queue.push(this.vertices[0]);
        this.vertices[0].visited = true;

        let current_vertex;
        let destinations = [];

        while (queue.length > 0) {
            current_vertex = queue.shift();
            destinations = current_vertex.vertexLinks;

            for (let i = 0; i < destinations.length; i++) {
                if (destinations[i].target.visited == false) {
                    queue.push(destinations[i].target);
                    destinations[i].target.visited = true;
                    console.log(current_vertex.name, '-', destinations[i].target.name);
                }
            }
        }

        this.resetVisited();
    }

    DFS() {
        this.#DFSRecursion(this.vertices[0]);
        this.resetVisited();
    }

    #DFSRecursion(current_vertex) {
        current_vertex.visited = true;
        let destinations = current_vertex.vertexLinks;

        for (let i = 0; i < destinations.length; i++) {
            if (destinations[i].target.visited == false) {
                console.log(current_vertex.name, '-', destinations[i].target.name);
                this.#DFSRecursion(destinations[i].target);
            }
        }
    }

    Dijkstra() {
        for (let i = 1; i < this.vertices.length; i++) {
            this.vertices[i].totalLength = Number.MAX_SAFE_INTEGER;
        }

        let current_vertex;
        let current_edge;
        let destinations = [];

        for (let i = 0; i < this.vertices.length; i++) {
            current_vertex = this.vertices[i];
            destinations = current_vertex.vertexLinks;
            if (destinations == null) continue;

            for (let j = 0; j < destinations.length; j++) {
                current_edge = destinations[j];
                let new_length = current_vertex.totalLength + current_edge.weight;
                if (new_length < current_edge.target.totalLength) {
                    current_edge.target.totalLength = new_length;
                    current_edge.target.sourceOfTotalLength = current_vertex;
                }
            }
        }

        let vertex = this.vertices[this.vertices.length - 1];
        let path = vertex.name;
        while (vertex.sourceOfTotalLength != null) {
            path = vertex.sourceOfTotalLength.name + ' - ' + path;
            vertex = vertex.sourceOfTotalLength;
        }
        console.log(path);

        this.resetVisited();
    }
}

let graph = new Graph(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']);

graph.addEdge(0, [1, 2, 3], [2, 4, 3]);
graph.addEdge(1, [4, 5, 6], [7, 4, 6]);
graph.addEdge(2, [4, 5, 6], [3, 2, 4]);
graph.addEdge(3, [4, 5, 6], [4, 1, 5]);
graph.addEdge(4, [7, 8], [1, 4]);
graph.addEdge(5, [7, 8], [6, 3]);
graph.addEdge(6, [7, 8], [3, 3]);
graph.addEdge(7, [9], [3]);
graph.addEdge(8, [9], [4]);

graph.Dijkstra();
