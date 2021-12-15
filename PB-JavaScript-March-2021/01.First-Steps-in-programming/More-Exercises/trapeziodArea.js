function trapezoidArea(input){
    let sideB1 = Number(input[0]);
    let sideB2 = Number(input[1]);
    let sideH = Number(input[2]);

    let area = (sideB1 + sideB2) * sideH / 2;

    console.log(area.toFixed(2));
}

trapezoidArea(["8", "13", "7"]);