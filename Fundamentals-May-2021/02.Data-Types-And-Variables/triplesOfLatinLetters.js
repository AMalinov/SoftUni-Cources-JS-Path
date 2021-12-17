function triplesOfLatinLetters(n) {

    let start = 97;
    let end = start + Number(n);

    for (let i = start; i < end; i++) {
        for (let j = start; j < end; j++) {
            for (let k = start; k < end; k++) {
                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(j);
                let thirdLetter = String.fromCharCode(k);

                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

triplesOfLatinLetters(3);