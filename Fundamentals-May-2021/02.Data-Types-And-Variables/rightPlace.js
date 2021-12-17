function rightPlace(str, char, result){

    // let res = str.replace('_', char);
    // let output = res === result ? 'Matched' : 'Not Matched';
    // console.log(output);

    let tempStr = '';

    for (let i = 0; i <= str.length - 1; i++) {

        if(str[i] === '_'){
            tempStr += char;
        } else {
            tempStr += str[i];
        }
    }

    if(tempStr === result){
        console.log('Matched');
    }else{
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');
console.log('------');
rightPlace('Str_ng', 'i', 'String');