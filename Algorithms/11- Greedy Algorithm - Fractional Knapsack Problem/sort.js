function mergeSort(array, start, end) {
    if (start >= end) return;

    let mid = Math.floor((end + start) / 2);

    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    merge(array, start, mid, end);
}

function merge(array, start, mid, end) {
    let left_array = array.slice(start, mid + 1);
    let right_array = array.slice(mid + 1, end + 1);

    let i = j = 0, k = start;
    while (i < left_array.length && j < right_array.length) {
        if (left_array[i].ratio >= right_array[j].ratio) {
            array[k] = left_array[i];
            i++;
        } else {
            array[k] = right_array[j];
            j++;
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

module.exports = { mergeSort };