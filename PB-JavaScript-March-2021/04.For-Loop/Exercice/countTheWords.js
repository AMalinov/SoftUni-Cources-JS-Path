function countTheWords(input){

    let text = input[0];

    let count = 0;

    for(i = 0; i <= text.length; i++){

        let ch = text[i];
        if(ch === " "){
            count++
        }
    }
    
    if(count > 9){

        console.log(`The message is too long to be send! Has ${count + 1} words.`)
    }else{
        console.log(`The message was sent successfully!`);
    }
}

countTheWords(["This message has exactly eleven words. One more as it's allowed!"]);
countTheWords(["This message has ten words and you can send it!"]);