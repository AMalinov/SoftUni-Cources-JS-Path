function printCharsBetween(charA, charB) {
    let min = charA.charCodeAt(0);
    let max = charB.charCodeAt(0);

    if (charA.charCodeAt(0) > charB.charCodeAt(0)) {
        min = charB.charCodeAt(0);
        max = charA.charCodeAt(0);
    }

    let result = '';

    for (let i = min+ 1; i < max; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    return result;
}

let result = printCharsBetween('a', 'd');
console.log(result);