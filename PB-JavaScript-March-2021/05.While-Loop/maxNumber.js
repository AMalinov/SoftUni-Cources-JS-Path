function maxNumber(input){

    let max = Number.MIN_SAFE_INTEGER;

    let index = 0;
    let command = input[index];
    index++;

    while(command !== "Stop"){
        let num = Number(command);
        if(num > max){
            max = num;
        }
        command = input[index];
        index++;
    }

    console.log(max);
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"]);