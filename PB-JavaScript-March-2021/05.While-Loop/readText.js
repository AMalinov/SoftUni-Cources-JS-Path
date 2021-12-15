function readText(input){

    let index = 0;

    while(true){
        let word = input[index];
        index++;

        if(word === "Stop"){
            break;
        }
        console.log(word);
    }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);