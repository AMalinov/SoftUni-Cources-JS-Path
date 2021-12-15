function pipesInPool(input){
    let poolCapacity = Number(input[0]);
    let pipeOneFlow = Number(input[1]);
    let pipeTwoFlow = Number(input[2]);
    let workerOut = Number(input[3]);

    let pipeOne = pipeOneFlow * workerOut;
    let pipeTwo = pipeTwoFlow * workerOut;

    let pipeOneAndTwo = pipeOne + pipeTwo;


    let poolPercents = (pipeOneAndTwo / poolCapacity) * 100;
    let pipeOnePercents = (pipeOne / pipeOneAndTwo) * 100;
    let pipeTwoPercents = (pipeTwo / pipeOneAndTwo) * 100;

    if(poolCapacity < pipeOneAndTwo){
        console.log(`For ${workerOut} hours the pool overflows with ${(pipeOneAndTwo - poolCapacity).toFixed(2)} liters.`);
    }else{

        console.log(`The pool is ${poolPercents.toFixed(2)}% full. Pipe 1: ${pipeOnePercents.toFixed(2)}%. Pipe 2: ${pipeTwoPercents.toFixed(2)}%.`)

    }
}

pipesInPool(["100", "100", "100" ,"2.5"]);