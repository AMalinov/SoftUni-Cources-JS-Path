function city(list) {

    for (let key of Object.keys(list)) {
        console.log(`${key} -> ${list[key]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
