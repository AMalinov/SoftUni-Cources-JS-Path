function vacation(people, groupType, dayOfWeek){

    let price = 0;

    if(groupType === "Students"){
        if(dayOfWeek === "Friday"){
            price = people * 8.45;
        }else if(dayOfWeek === "Saturday"){
            price = people * 9.80;
        }else if(dayOfWeek === "Sunday"){
            price = people * 10.46;
        }

        if(people >= 30){
            price *= 0.85;
        }
    }else if(groupType === "Business"){
        
        if(people >= 100){
            people -= 10;
        }

        if(dayOfWeek === "Friday"){
            price = people * 10.90;
        }else if(dayOfWeek === "Saturday"){
            price = people * 15.60;
        }else if(dayOfWeek === "Sunday"){
            price = people * 16;
        }

    }else if(groupType === "Regular"){
        if(dayOfWeek === "Friday"){
            price = people * 15;
        }else if(dayOfWeek === "Saturday"){
            price = people * 20;
        }else if(dayOfWeek === "Sunday"){
            price = people * 22.50;
        }
        if(people >= 10 && people <= 20){
            price *= 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");