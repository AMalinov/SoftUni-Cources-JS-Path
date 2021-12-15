function password(input){

    let name = input[0];
    let pass = input[1];
    let data = input[2];

    let index = 3;

    while(data !== pass){

        data = input[index];
        index++;

    }

    console.log(`Welcome ${name}!`);
}

//password(["Gosho", "secret", "secret"]);
password(["Nakov", "1234", "Pass", "1324", "1234"]);