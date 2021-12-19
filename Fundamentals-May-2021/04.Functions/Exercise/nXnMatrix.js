function nXnMatrix(n) {
    
    for (let row = 1; row <= n; row++) {
        let result = '';
        for (let col = 1; col <= n; col++) {
            result += `${n} `;
            
        }
        console.log(result);
    }
}

nXnMatrix(3);