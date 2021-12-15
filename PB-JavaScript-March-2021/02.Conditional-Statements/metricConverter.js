function metricConverter(input){
    let lenghtInput = Number(input[0]);
    let entryUnit = input[1];
    let exitUnit = input[2];

    if(entryUnit === "mm"){

        if(exitUnit === "m"){
            console.log((lenghtInput / 1000).toFixed(3));
        }else if(exitUnit === "cm"){
            console.log((lenghtInput / 10).toFixed(3));
        }else{
            console.log(lenghtInput.toFixed(3));
        }
    }else if(entryUnit === "cm"){
        
        if(exitUnit === "mm"){
            console.log((lenghtInput * 10).toFixed(3));
        }else if(exitUnit === "m"){
            console.log((lenghtInput / 100).toFixed(3));
        }else{
            console.log(lenghtInput.toFixed(3));
        }
    }else if(entryUnit === "m"){

        if(exitUnit === "mm"){
            console.log((lenghtInput * 1000).toFixed(3));
        }else if(exitUnit === "cm"){
            console.log((lenghtInput * 100).toFixed(3));
        }else{
            console.log(lenghtInput.toFixed(3));
        }
    }
}

metricConverter(["45","cm","mm"]);