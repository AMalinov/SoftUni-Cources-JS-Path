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

    console.log(res);
}

fromDecimalToBinary(26);