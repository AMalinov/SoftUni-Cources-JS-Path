function storeProvision(currentStock, orderedStock) {

    let store = [];

    for (let index = 0; index < currentStock.length - 1; index += 2) {
        let product = currentStock[index];
        let quantity = Number(currentStock[index + 1]);

        let productObj = {
            product,
            quantity
        };

        store.push(productObj);
    }

    for (let index = 0; index < orderedStock.length - 1; index += 2) {
        let product = orderedStock[index];
        let quantity = Number(orderedStock[index + 1]);

        let productObj = {
            product,
            quantity
        };

        let indexOfProduct = store.findIndex(x => x.product === product);

        if(indexOfProduct === -1) {
            store.push(productObj);
        } else {
            store[indexOfProduct].quantity += quantity;
        }
    }

    for (let product of store) {
        console.log(`${product.product} -> ${product.quantity}`);
    }
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);