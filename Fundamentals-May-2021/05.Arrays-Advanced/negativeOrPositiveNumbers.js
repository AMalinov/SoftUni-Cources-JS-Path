function negativeOrPositiveNumbers(nums) {
    // variable to store result
    let result = [];
    // iterate through all input elements (use loop)

    for (let i = 0; i < nums.length; i++) {
        // - negative number  -> prepend to result (unshif())
        // - otherwise -> append to result (push())

        if (nums[i] < 0) {
            result.unshift(nums[i]);
        } else {
            result.push(nums[i]);
        }
    }

    // iterate through all result elements (use loop)
    // for (const iterator of result) {
    //     console.log(iterator);
    // }

    console.log(result.join('\n'));

}

/*
    function negativeOrPositiveNumbers(nums) {
    // variable to store result
    let result = [];
    // iterate through all input elements (use loop)

    for (let num of nums) {

        if (num < 0) {          // - negative number  -> prepend to result (unshif())
            result.unshift(num);
        } else {                // - otherwise -> append to result (push())
            result.push(num);
        }

    }

    // iterate through all result elements (use loop)
    for (const iterator of result) {
        console.log(iterator);
    }

}
*/

negativeOrPositiveNumbers([7, -2, 8, 9]);
//negativeOrPositiveNumbers([3, -2, 0, -1]);