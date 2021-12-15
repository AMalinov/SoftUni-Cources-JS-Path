function equalSumsEvenOddPosition(input){

    let numA = Number(input[0]);
    let numB = Number(input[1]);

    let printLine = "";
    for (let i = numA; i <= numB; i++) {
        let currentNum = i + "";
        let oddSum = 0;
        let evenSum = 0;
        for(j = 0; j < currentNum.length; j++){
            let currentDigit = Number(currentNum.charAt(j));

            if(j % 2 === 0){
                evenSum += currentDigit;
            }else{
                oddSum += currentDigit;
            }
        }
        if(oddSum === evenSum){
            printLine += `${i} `;
        }
        
    }
    console.log(printLine);
}

equalSumsEvenOddPosition(["123456",
"124000"]);