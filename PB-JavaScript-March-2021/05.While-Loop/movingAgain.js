function movingAgain(input){

    let index = 0;

    let h = Number(input[index]);
    index++;
    let b = Number(input[index]);
    index++;
    let c = Number(input[index]);
    index++;

    let cubic = h * b * c;
    let totalMoved = 0;
    let diff = 0;

    let command = input[index];

    while(true){
        command = input[index];
        index++;

        if(totalMoved >= cubic){
            diff = Math.abs(totalMoved - cubic);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }

        if(command === "Done" && totalMoved < cubic){
            diff = Math.abs(totalMoved - cubic);
            console.log(`${diff} Cubic meters left.`);
            break;
        }
        
        totalMoved += Number(command);
        

    }
}

//movingAgain(["10", "1", "2", "4", "6", "Done"]);

movingAgain(["10", "10", "2", "20", "20", "20", "20", "122"]);