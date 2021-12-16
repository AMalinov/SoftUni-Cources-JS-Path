function login(command){

    let username = command.shift();
    let pass = username.split('').reverse().join('');

    let count = 0;
    let test = command.shift();
    while(test !== pass){
        count++;
        test = command.shift();
        

        if(count >= 4){
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log("Incorrect password. Try again.");
        
    }

    if(test === pass && count < 4){
        console.log(`User ${username} logged in.`);
    }

}

//login(['Acer','login','go','let me in','recA']);
//login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);