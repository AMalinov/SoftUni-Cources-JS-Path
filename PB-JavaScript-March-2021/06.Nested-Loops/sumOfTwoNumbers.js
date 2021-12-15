function sumOfTwoNumbers(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let magic = Number(input[2]);

    let combCount = 0;
    let isMagicComb = true;

    for (let i = x; i <= y; i++) {
        for (let j = x; j <= y; j++) {
            combCount++;

            if (i + j === magic) {
                isMagicComb = false;
                console.log(`Combination N:${combCount} (${i} + ${j} = ${magic})`);
                return;
            }
        }
    }

    if(isMagicComb){
        console.log(`${combCount} combinations - neither equals ${magic}`);
    }
}

//sumOfTwoNumbers(["1", "10", "5"]);
//sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "2000"]);