function sequence2k1(input){

    let num = Number(input[0]);

    let temp = 1;

    while(temp <= num){
        console.log(temp);

        temp = temp * 2 + 1;
    }


}

sequence2k1(["31"]);

