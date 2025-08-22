// Graph – Prim's Minimum Spanning Tree (MST)

let labels = ['1', '2', '3', '4', '5', '6',];

let graph = [
    [0, 6.7, 5.2, 2.8, 5.6, 3.6], // 1
    [6.7, 0, 5.7, 7.3, 5.1, 3.2],
    [5.2, 5.7, 0, 3.4, 8.5, 4.0], // 1
    [2.8, 7.3, 3.4, 0, 8, 4.4], // 1
    [5.6, 5.1, 8.5, 8, 0, 4.6],
    [3.6, 3.2, 4, 4.4, 4.6, 0]
];

let v = graph.length;

let selected_edges_count = 0;
let selected = [true];

while (selected_edges_count < v - 1) {
    let min = Number.MAX_SAFE_INTEGER;
    let temp_from = -1;
    let temp_to = -1;

    for (let i = 0; i < v; i++) {
        if (selected[i] == true) {
            for (let j = 0; j < v; j++) {
                if (selected[j] == null && graph[i][j] > 0 && graph[i][j] < min) {
                    min = graph[i][j];
                    temp_from = i;
                    temp_to = j;
                }
            }
        }
    }

    selected[temp_to] = true;
    selected_edges_count++;

    console.log(labels[temp_from] + ' - ' + labels[temp_to] + ': ' + graph[temp_from][temp_to]);
}