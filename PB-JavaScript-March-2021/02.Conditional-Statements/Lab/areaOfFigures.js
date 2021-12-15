function areaOfFigures(input){

    let figure = input[0];

    let sideA = 0.0;
    let sideB = 0.0;

    if(figure === "square"){
        sideA = Number(input[1]);

        console.log((sideA * sideA).toFixed(3));
    }else if(figure === "rectangle"){
        sideA = Number(input[1]);
        sideB = Number(input[2]);

        console.log((sideA * sideB).toFixed(3));
    }else if(figure === "circle"){

        sideA = Number(input[1]);

        console.log((Math.PI * sideA * sideA).toFixed(3));

    }
    else if(figure === "triangle"){
        sideA = Number(input[1]);
        sideB = Number(input[2]);

        console.log(((sideA * sideB) / 2).toFixed(3));
    }
}

areaOfFigures(["circle",
"6"]);