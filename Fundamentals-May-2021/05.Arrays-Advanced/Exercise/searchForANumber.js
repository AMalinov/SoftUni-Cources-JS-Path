function searchForANumber(originalElements, elementsToDelete) {
    
    let numsToTake = elementsToDelete.shift();
    let numsToDelete = elementsToDelete.shift();
    let numToSearch = elementsToDelete.shift();

    let count = 0;

    let manipulatedArr = originalElements.slice(0, numsToTake);

    manipulatedArr.splice(0, numsToDelete);

    for (const num of manipulatedArr) {
        if(num === numToSearch) {
            count++;
        }
    }

    console.log(`Number ${numToSearch} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],[5, 2, 3]);