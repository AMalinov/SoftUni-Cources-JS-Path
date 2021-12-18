function magicSum(list, number) {

    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === number) {
                console.log(`${list[i]} ${list[j]}`)
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);