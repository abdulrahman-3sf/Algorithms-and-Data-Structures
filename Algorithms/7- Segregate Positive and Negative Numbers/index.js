/*
    Segregate Sort
    1- read the array, start and end index of the portion that we need to sort.
    2- do not continue if the start greater than or equal to end index.
    3- calculate the midpoint (end + start) / 2.
    4- divide the portion of the array into new two arrays.
    5- call your self twice, one for left portion and one for the right portion.
    6- merge the two portions.

    Merge
    1- read the array, start, midpoint and end index.
    2- create two new arrays for each side.
    3- copmare all items in the left array first if it is less than 0 after that the right array.
    4- move remain items in each array to the original arrays as is.
*/

// Segregate Positive and Negative Numbers using Merge Sort Algorithm

function segergate(array, start, end) {
    if (start >= end) return;

    let mid = Math.floor((end + start) / 2);

    segergate(array, start, mid);
    segergate(array, mid + 1, end);
    merge(array, start, mid, end);
}

function merge(array, start, mid, end) {
    let left_array = array.slice(start, mid + 1);
    let right_array = array.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;
    while (i < left_array.length && left_array[i] < 0) {
        array[k] = left_array[i];
        i++;
        k++;
    }

    while (j < right_array.length && right_array[j] < 0) {
        array[k] = right_array[j];
        j++;
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

let array = [123, 33, -2, 1, -33, -44, 155];

console.log(...array);
segergate(array, 0, array.length - 1);
console.log(...array);