// Greedy Algorithm – Activity Selection Problem

function greedy_activity_selector(start, end) {
    let selectedActivites = [0];

    for (let i = 1, j = 0; i < start.length; i++) {
        if (start[i] >= end[j]) {
            selectedActivites.push(i);
            j = i;
        }
    }

    return selectedActivites;
}

let start = [9, 10, 11, 12, 13, 15];
let end = [11, 11, 12, 14, 15, 16];

console.log(greedy_activity_selector(start, end));