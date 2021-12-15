function cake(input){

    let h = Number(input[0]);
    let b = Number(input[1]);

    let totalCake = h * b;
    let pieces = 0;
    let command = input[2];
    let index = 3;

    while(command !== "STOP"){
        pieces += Number(command);

        if(pieces > totalCake){
            break;
        }
        command = input[index++];
    }

    if(pieces > totalCake){
        console.log(`No more cake left! You need ${pieces - totalCake} pieces more.`);
    }else{
        console.log(`${totalCake - pieces} pieces are left.`)
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);