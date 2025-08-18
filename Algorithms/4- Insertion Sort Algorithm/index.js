/*
    1- x = [], key = 0
    2- fill the x array
    3- for i = 1 forward i < x.length
    3.1-    key = x[i]
    3.2-    for j = i - 1 forward j >= 0
    3.2.1-      if key < x[j] then x[j+1] = x[j]
    3.2.2-      else break
    3.3-    x[j+1] = key
    4- print x array
*/

// Insertion Sort
function insertionSort(x) {
    for (var i = 1; i < x.length; i++) {
        key = x[i];

        for (var j = i - 1; j >= 0; j--) {
            if (key < x[j]) x[j + 1] = x[j];
            else break;
        }

        x[j + 1] = key;
    }

    return x;
}

let x = [9, 4, 5, 1];
console.log(insertionSort(x));