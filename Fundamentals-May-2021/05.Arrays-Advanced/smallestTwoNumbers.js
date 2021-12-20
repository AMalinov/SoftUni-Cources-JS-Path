function smallestTwoNumbers(nums) {

    let sorted = nums.sort((a, b) => {
        return a - b;
    });

    let sliced = sorted.slice(0, 2);

    console.log(sliced.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);