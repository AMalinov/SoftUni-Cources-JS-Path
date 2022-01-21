class Storage {
    constructor(capacity) {
        this.capacity = capacity
        this.storage = []
        this.totalCost = 0
    }
 
    addProduct = p => {
        this.storage.push(p)
        this.capacity -= p.quantity
        this.totalCost += p.price * p.quantity
    }
    getProducts = () => {
        this.storage = this.storage.map(x => JSON.stringify(x))
        return this.storage.join('\n')
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

let output = storage.getProducts();

expect(output).to.equal('{"name":"Cucamber","price":1.5,"quantity":15}\n{"name":"Tomato","price":0.9,"quantity":25}\n{"name":"Bread","price":1.1,"quantity":8}');
expect(storage.capacity).to.equal(2);
expect(storage.totalCost).to.equal(53.8);