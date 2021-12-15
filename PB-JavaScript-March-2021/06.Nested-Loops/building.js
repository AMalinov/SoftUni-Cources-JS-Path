function building(input){

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    // if(floors === 1){
    //     for(a = 0; a  < rooms; a++){
    //         console.log(`L${floors}${a}`);
    //     }
    // }else{
    //     // for(a = 0; a  < rooms; a++){
    //     //     console.log(`L${floors}${a}`);
    //     // }
    //     for (let i = 1; i < rooms; i++) {
    //         for (let j = 0; j < floors; j++) {
    //             if(i % 2 === 0){
    //                 console.log(`O${i}${j}`);
    //                 continue;
    //             }else{
    //                 console.log(`A${i}${j}`);
    //                 continue;
    //             }
    //         }
    //     }
    // }


    for(let f = floors; f > 0; f--){
        let result = "";
        for(let r = 0; r < rooms; r++){
            if(f === floors){
                result += `L${f}${r} `;          //"" + f + r + " "
            }else if(f % 2 === 0){
                result += `O${f}${r} `;
            }else{
                result += `A${f}${r} `;
            }
            
        }
        console.log(result);
        // if(f % 2 === 0){
        //     console.log(`O${result}`);
        // }else{
        //     console.log(`A${result}`);
        // }
    }
}

building(["6", "4"]);