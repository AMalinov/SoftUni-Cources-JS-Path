function firstAndLastKNumbers(arr) {

    let k = arr.shift();

    let forward = arr.slice(0, k);
    let backwards = arr.slice(-k);

    console.log(forward.join(' '));
    console.log(backwards.join(' '));

    // // create two variables for result
    // // extract first element (shift)
    // let k = arr.shift();
    // let forward = [];
    // let backwards = [];

    // // iterate forward from 0 to k

    // for(let i = 0; i < k; i++) {
    //     forward.push(arr[i]);
    // }
    // // iterate backwards from length - 1 to length - k

    // for (let i = arr.length - k; i < arr.length; i++) {
    //     backwards.push(arr[i]);
    // }

    // console.log(forward.join(' '));
    // console.log(backwards.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);