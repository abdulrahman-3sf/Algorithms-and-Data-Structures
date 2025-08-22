// Graph – Depth First Search - Algorithm

class Vertex {
    name = '';
    visited = false;
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

    resetVisited() {
        for (let vertex of this.vertices) {
            vertex.visited = false;
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
}

let graph = new Graph(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);

graph.addEdge(0, [1, 2]);        // A → B, C
graph.addEdge(1, [4, 3, 0]);     // B → E, D, A
graph.addEdge(2, [3, 5, 0]);     // C → D, F, A
graph.addEdge(3, [2, 4, 1]);     // D → C, F, B
graph.addEdge(4, [5, 1]);        // E → F, B
graph.addEdge(5, [3, 4, 2, 7]);  // F → D, E, C, H
graph.addEdge(6, [7, 8]);        // G → H, I
graph.addEdge(7, [6, 8, 5]);     // H → G, I, F
graph.addEdge(8, [6, 7]);        // I → G, H

graph.DFS();
