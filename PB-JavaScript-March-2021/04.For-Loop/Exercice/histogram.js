function histogram(input){

    let count = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(i = 1; i <= count; i++){

        let temp = Number(input[i]);

        if(temp < 200){
            p1++;
        }else if(temp >= 200 && temp <= 399){
            p2++;
        }else if(temp >= 400 && temp <= 599){
            p3++;
        }else if(temp >= 600 && temp <= 799){
            p4++;
        }else{
            p5++;
        }
    }

    console.log(Math.abs(p1 / count * 100).toFixed(2) + "%");
    console.log(Math.abs(p2 / count * 100).toFixed(2) + "%");
    console.log(Math.abs(p3 / count * 100).toFixed(2) + "%");
    console.log(Math.abs(p4 / count * 100).toFixed(2) + "%");
    console.log(Math.abs(p5 / count * 100).toFixed(2) + "%");
}

histogram(["3", "1", "2", "999"]);