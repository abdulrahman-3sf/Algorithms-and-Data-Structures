// Dynamic Programming – Longest Common Subsequence

let text1 = 'HELLOWORLD';
let text2 = 'OHELOD';
let text1Length = text1.length;
let text2Length = text2.length;

text1 = ' ' + text1;
text2 = ' ' + text2;

let table = [];

for (var i = 0; i <= text2Length; i++) {
    table[i] = [];
    for (var j = 0; j <= text1Length; j++) {
        if (i == 0 || j == 0) {
            table[i][j] = 0;
        } else if (text2[i] == text1[j]) {
            table[i][j] = table[i - 1][j - 1] + 1;
        } else {
            table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
        }
    }
}

let str = '';
i = text2Length, j = text1Length;

while (i > 0 && j > 0) {
    if (table[i][j] > table[i][j - 1]) { // greater than left cell
        if (table[i][j] == table[i - 1][j]) { // not match
            i--;
        } else { // match
            str = text2[i] + str;
            i--;
            j--;
        }
    } else {
        j--;
    }
}

console.log(table);
console.log(str);