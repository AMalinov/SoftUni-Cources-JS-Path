function accountBalance(input){


    // let sum = 0;

    // while(true){

    //     let index = 0;
    //     let num = input[index];
    //     console.log(`Increase: ${Number(num).toFixed(2)}`);
    //     index++;

    //     sum += num;
    //     if(parseInt(num) < 0){
    //         console.log("Invalid operation!");
    //     }

    //     if(num === "NoMoreMoney"){
    //         break;
    //     }
    // }

    // console.log(`Total: ${sum.toFixed(2)}`);


    let index = 0;
    let command = input[index];
    index++;
    let total = 0

    while(command !== "NoMoreMoney"){
        let money = Number(command);

        if(money < 0){
            console.log("Invalid operation!")
            break;
        }else{
            
            console.log(`Increase: ${money.toFixed(2)}`);
            command = input[index];
            index++
        }
        total += money;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

//accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);