function housePainting(input){

    let houseHeight = Number(input[0]);
    let longWall = Number(input[1]);
    let triangleHeight = Number(input[2]);

    // green paint 1 liter for 3.4 square meters
    // red paint 1 liter for 4.3 square meters

    // Walls logic

    let walls = houseHeight * longWall;
    let windows = 1.5 * 1.5;
    let sumTwoSideWalls = (2 * walls) - (2 * windows);
    let frontWall = houseHeight * houseHeight;
    let door = 1.2 * 2;
    let sumFrontAndBackWall = ((frontWall * 2) - door) + sumTwoSideWalls;

    let totalGeenPaint = sumFrontAndBackWall / 3.4;

    // Roof logic
    
    let twoRectangles = 2 * (houseHeight * longWall);
    let twoTriangles = 2 * (houseHeight * triangleHeight / 2);
    let sumRoof = twoRectangles + twoTriangles;

    let totalRedPaint = sumRoof / 4.3;

    console.log(totalGeenPaint.toFixed(2));
    console.log(totalRedPaint.toFixed(2));
}

housePainting(["6", "10", "5.2"]);