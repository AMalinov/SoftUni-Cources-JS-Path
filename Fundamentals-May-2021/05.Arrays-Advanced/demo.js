/*
push() - add element to the end - changes the length 
pop() - remove from the end
unshift() - add to the beginning - changes the index of the rest of the elements
shift() - remove from the beginning 
includes() - look vor value - returns "true" of "false"
indexOf() - return the index of the value
*/

let myArr = [5, 8, -3, 11, 44, 13, -8];

console.log('before', myArr);
let removed = mySplice(myArr, 3, 0, ['a','b','c','d']);
//myArr.splice(3, 2, 'a','b','c','d', 321321321);
console.log('after', myArr);
console.log('removed', removed);



function mySplice(arr, start, count, insert) {

    // slice from 0 to 'start' (left part)
    // slice from 'start' to 'start' + 'count' (removed part)
    // slice from 'start' + 'count' to end (right part)

    // delete all elements from arr
    // push all elements from left part to arr
    // push new elements to arr
    // push all elements from right part to arr
    
    // return removed part

    let left = arr.slice(0, start);
    let removed = arr.slice(start, start + count);
    let right = arr.slice(start + count);

    arr.length = 0;

    for( let element of left) {
        arr.push(element);
    }

    if (insert != undefined) {
        for (let element of insert) {
            arr.push(element);
        }
    }
    for (let element of right){
        arr.push(element);
    }

    return removed;
}
//console.log(result);
function mySlice(arr, start, end) {
    // create variable to store result
    // iterate through all elements starting at index 'start' and stopping before index 'end'
    // - copy element to result
    // return result

    if(start === undefined){
        start = 0;
    }
    if(end === undefined) {
        end = arr.length;
    }

    let result = [];

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

function myIncludes(arr, value) {
    // iterate through all elements and compare them with the value
    // if a single element is a match return true
    // at the end of the array return false

    for (const element of arr) {
        if (element == value) {
            return true;
        }
    }

    return false;
}

function myIndexOf(arr, value) {
    // iterate through all elements and compare them with the value
    // if a single element is a match return its index
    // at the end of the array return -1

    for (let i = 0; i < arr.length; i++) {

        let element = arr[i];

        if (element == value) {
            return i;
        }
    }

    return -1;


}