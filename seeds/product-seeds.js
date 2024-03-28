const { Product } = require('../models');

const productData = [
  {
    product_name: 'Apples',
    price: 1,
    stock: 18,
    category_id: 1,
  },
  {
    product_name: 'Peaches',
    price: 0.99,
    stock: 18,
    category_id: 5,
  },
  {
    product_name: 'Banana',
    price: 2,
    stock: 18,
    category_id: 4,
  },
  {
    product_name: 'DragonFruit',
    price: 5,
    stock: 18,
    category_id: 3,
  },
  {
    product_name: 'Oranges',
    price: 0.18,
    stock: 18,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
