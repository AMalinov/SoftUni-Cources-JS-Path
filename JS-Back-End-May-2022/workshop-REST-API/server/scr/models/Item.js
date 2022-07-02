const { model, Schema } = require('mongoose');

const URL_PATTERN = /^https?:\/\/(.+)/;

const itemSchema = new Schema({
    make: { type: String, minLength: [4, 'Make must be at least 4 characters long'] },
    model: { type: String, minLength: [4, 'Model must be at least 4 characters long'] },
    year: {
        type: Number,
        min: [1950, 'Year must be between 1950 and 2050'],
        max: [2050, 'Year must be between 1950 and 2050'],
    },
    description: { type: String, minLength: [10, 'Description must be at least 10 characters long'] },
    price: { type: Number, min: [0.01, 'Price must be a positive number'] },
    img: {
        type: String, validate: {
            validator(value) {
                return URL_PATTERN.test(value);
            },
            message: 'Image must be a valid URL'
        },
        required: true
    },
    material: { type: String }
});

const Item = model('Item', itemSchema);

module.exports = Item;