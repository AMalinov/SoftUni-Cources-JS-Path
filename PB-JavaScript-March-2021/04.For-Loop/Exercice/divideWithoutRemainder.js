function divideWithoutRemainder(input) {

    let count = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (i = 1; i <= count; i++) {

        let temp = Number(input[i]);

        if (temp % 2 === 0) {
            p1++;
        }
        
        if(temp % 3 === 0){
            p2++;
        }

        if(temp % 4 === 0){
            p3++;
        }
    }

    console.log((p1 / count * 100).toFixed(2) + "%");
    console.log((p2 / count * 100).toFixed(2) + "%");
    console.log((p3 / count * 100).toFixed(2) + "%");
}

divideWithoutRemainder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);