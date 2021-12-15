function passwordGuess(input){

    let inputPassword = input[0];
    let correctPassword = "s3cr3t!P@ssw0rd";

    if(inputPassword === correctPassword){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"]);