function minNumber(input) {

    let numbersCount = Number(input[0]);

    let min = Number.MAX_VALUE;

    for (i = 1; i <= numbersCount; i++) {

        let temp = Number(input[i]);

        if(temp < min){
            min = temp;
        }
    }

    console.log(min);
}

minNumber(["4",
    "45",
    "-20",
    "7",
    "99"]);