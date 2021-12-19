function oddAndEvenSum(number) {

    function getOddSum(number) {
        let num = number.toString().split('');
        let sumOdd = 0;
        for (let i = 0; i < num.length; i++) {

            if(num[i] % 2 !== 0) {
                sumOdd += Number(num[i]);
            }
        }
        return sumOdd;
    }

    function getEvenSum(number) {
        let num = number.toString().split('');
        let sumEven = 0;
        for (let i = 0; i < num.length; i++) {

            if(num[i] % 2 === 0) {
                sumEven += Number(num[i]);
            }
        }
        
        return sumEven;
    }

    let oddSum = getOddSum(number);
    let evenSum = getEvenSum(number);

    //console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

oddAndEvenSum(1000435);

