function amazingNumbers(number){

    let str = number.toString().split('');
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    let result = sum.toString().includes('9');

    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}

amazingNumbers(1233);