function fishland(input){

    let mackerelForKG = Number(input[0]);
    let spratForKG = Number(input[1]);
    let bonitoKG = Number(input[2]);
    let scadKG = Number(input[3]);
    let clamKG = Number(input[4]);

    let bonitoPrice = mackerelForKG + mackerelForKG * 0.60;
    let bonitoSum = bonitoPrice * bonitoKG;

    let scadPrice = spratForKG + spratForKG * 0.80;
    let scadSum = scadPrice * scadKG;

    let clamSum = clamKG * 7.50;

    let totalSum = bonitoSum + scadSum + clamSum;

    console.log(totalSum.toFixed(2));


}

fishland(["5.55", "3.57", "4.3", "3.6", "7"]);