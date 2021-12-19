function palindromeIntegers(numArray) {
    //let isPalindrome = false;

    for (const num of numArray) {

        let rev = reversedNum(num);

        if(num === rev) {
            // isPalindrome = true;
            console.log(true);
        } else {
            // isPalindrome = false;
            console.log(false);
        }

        //console.log(isPalindrome);
    }

    function reversedNum(num) {
        return Number(num.toString().split('').reverse().join(''));
    }
}

palindromeIntegers([123,323,421,121]);


