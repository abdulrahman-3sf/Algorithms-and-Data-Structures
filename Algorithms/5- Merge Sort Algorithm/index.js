/*
    Merge Sort
    1- read the array, start and end index of the portion that we need to sort.
    2- do not continue if the start greater than or equal to end index.
    3- calculate the midpoint (end + start) / 2.
    4- divide the portion of the array into new two arrays.
    5- call your self twice, one for left portion and one for the right portion.
    6- merge the two portions.

    Merge
    1- read the array, start, midpoint and end index.
    2- create two new arrays for each side.
    3- copmare all items in the arrays and sort it in the original array.
    4- move remain items in each array to the original arrays as is.
*/

// Merge Sort
function mergeSort(array, start, end) {
    if (start >= end) return;

    let midpoint = Math.floor((end + start) / 2);

    mergeSort(array, start, midpoint);
    mergeSort(array, midpoint + 1, end);
    merge(array, start, midpoint, end);
}

// Merge
function merge(array, start, midpoint, end) {
    let left_array = array.slice(start, midpoint + 1);
    let right_array = array.slice(midpoint + 1, end + 1);

    let i = j = 0, k = start;
    while (i < left_array.length && j < right_array.length) {
        if (left_array[i] <= right_array[j]) {
            array[k] = left_array[i];
            i++;
        } else {
            array[k] = right_array[j];
            j++
        }
        k++;
    }

    while (i < left_array.length) {
        array[k] = left_array[i];
        i++;
        k++;
    }

    while (j < right_array.length) {
        array[k] = right_array[j];
        j++;
        k++;
    }
}

let array = [11, 55, 22, 35, 56, 73, 12, 87, 65, 655];

console.log(array);
mergeSort(array, 0, array.length - 1);
console.log(array);