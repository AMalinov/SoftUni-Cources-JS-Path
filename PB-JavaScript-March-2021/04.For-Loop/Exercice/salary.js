function salary(input){

    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);

    let moneyLeft = 0;

    for(i = 2; i <= tabsCount + 2; i++){

        let site = input[i];

        switch (site) {
            case "Facebook": (salary -= 150); break;
            case "Instagram": (salary -= 100); break;
            case "Reddit": (salary -= 50); break;
            default:
                break;
        }

        if(salary <= 0){
            break;
        }
    }
    
    if(salary <= 0){
        console.log("You have lost your salary.")
    }else{
        console.log((salary - moneyLeft));
    }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);