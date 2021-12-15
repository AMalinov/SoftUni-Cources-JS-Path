function moving(input){

    ///// movingAgain.js gives me 100 points in Judge
    ///// This solution gives just 87 points....
    ///// ToDo WHY ??

    let h = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let cubic = h * b * c;

    let index = 3;
    let command = Number(input[index]);
    let total = 0;
    total += command;

    index++;
    while(true){
        command = input[index];
        index++;
        if(command === "Done" || cubic <= total){
            console.log(`${Math.abs(total - cubic)} Cubic meters left.`);
            break;
        }

        total += parseInt(command);
        

        
        if(cubic <= total){
            console.log(`No more free space! You need ${Math.abs(total - cubic)} Cubic meters more.`);
            break;
        }

        
        if(total >= cubic){
            console.log(`${Math.abs(total - cubic)} Cubic meters left.`);
            break;
        }
    }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);