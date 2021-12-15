function triangleArea(input){

    let sideA = Number(input[0]);
    let sideH = Number(input[1]);

    let area = sideA * sideH / 2;

    console.log(area.toFixed(2));
}

triangleArea(["20", "30"]);