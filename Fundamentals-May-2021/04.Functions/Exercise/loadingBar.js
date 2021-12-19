function loadingBar(number) {
    let start = number / 10;
    let char = '%'

    if(number === 100){
        console.log(`100% Complete!`);
        console.log(`[${char.repeat(start)}]`);
        return;
    }

    let result = '[';

    for (let i = 1; i <= start; i++) {
        result += `%`;
    }
    result += `${'.'.repeat(10 - start)}`;
    result += ']';
    console.log(`${number}${char} ${result}`);
    console.log('Still loading...');
}

loadingBar(100);