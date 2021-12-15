function numberPyramid(input){

    let num = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let row = 1; row <= num; row++) {
        for (let cols = 1; cols <= row; cols++) {
            if(current > num){
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger){
            break;
        }
    }

}

numberPyramid(["7"])