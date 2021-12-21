function binaryDigitCount(number, numToCount) {

    let binary = fromDecimalToBinary(number);
    let count = 0;
    for (const num of binary) {
        if (num === numToCount) {
            count++;
        }
    }

    console.log(count);

    function fromDecimalToBinary(num) {

        let res = [];
    
        while (num > 0) {
            let remaining = num % 2;
    
            if(remaining === 1) {
                res.unshift(1);
            } else {
                res.unshift(0);
            }
    
           num = parseInt(num / 2);
        }
    
        return res;
    }
}

binaryDigitCount(10, 0);