/*
    Name: Resize

    Assumptions:
        - array data is stored in memory heap
        - array address is stored in memory stack

    Inputs:
        - the array data type
        - the array itself
        - new size

    Processes:
        - validations:
            - the new size is a valid number
            - the array is not null
            - the new size is not equal to the current size
    
        - resize:
            - solution 1: (we need to assign the function to the arrray variable)
                - create new empty array with the same type and with new size
                - copy items from the array to new array
                - assign the address of the new array to the array
            - solution 2:
                - check if the new size < array.length then array.length = new size
                - else while array.length < new size then array.push(null)
    
    Output:
        - nothing to return
*/

class MyArray {
    static Resize(array, new_size) {
        if (new_size < 0 || new_size > Number.MAX_SAFE_INTEGER) return;
        if (array == null) return;
        if (new_size == array.length) return;

        if (new_size < array.length)
            array.length = new_size;
        else
            while (array.length < new_size)
                array.push(null);
    }
}

let array = [2, 3, 5, 6];

MyArray.Resize(array, 5);

console.log(array);