/*
    1- declare array, low = 0, high = length - 1
    2- while low <= high
    2.1- calculate mid based on low and high
    2.2- if key == array[mid] then return mid
    2.3- else if key > array[mid] then low = mid + 1
    2.4- else then high = mid - 1
    3- return -1
*/

// Binary Search
function binarySearch(array, key) {
    let low = 0, high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (key == array[mid])
            return mid;
        else if (key > array[mid])
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(array, 1));