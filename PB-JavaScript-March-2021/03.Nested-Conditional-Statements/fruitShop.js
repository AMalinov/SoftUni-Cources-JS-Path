function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let kg = Number(input[2]);

    let banana = 0;
    let apple = 0;
    let orange = 0;
    let grapefruit = 0;
    let kiwi = 0;
    let pineapple = 0;
    let grapes = 0;
    let isValidDay = true;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            banana = 2.50;
            apple = 1.20;
            orange = 0.85;
            grapefruit = 1.45;
            kiwi = 2.70;
            pineapple = 5.50;
            grapes = 3.85;
            break;
        case "Saturday":
        case "Sunday":
            banana = 2.70;
            apple = 1.25;
            orange = 0.90;
            grapefruit = 1.60;
            kiwi = 3.00;
            pineapple = 5.60;
            grapes = 4.20;
            break;
        default: isValidDay = false; break;
    }

    if(isValidDay){
        if(fruit === "banana"){
            console.log(`${(banana * kg).toFixed(2)}`)
    
        }else if(fruit === "apple"){
            console.log(`${(apple * kg).toFixed(2)}`);
    
        }else if(fruit === "orange"){
            console.log(`${(orange * kg).toFixed(2)}`);
            
        }else if(fruit === "grapefruit"){
            console.log(`${(grapefruit * kg).toFixed(2)}`);
            
        }else if(fruit === "kiwi"){
            console.log(`${(kiwi * kg).toFixed(2)}`);
            
        }else if(fruit === "pineapple"){
            console.log(`${(pineapple * kg).toFixed(2)}`);
            
        }else if(fruit === "grapes"){
            console.log(`${(grapes * kg).toFixed(2)}`);
            
        }else{
            console.log("error");
        }
    }else{
        console.log("error");
    }
}

fruitShop(["apple", "Workday", "2"]);