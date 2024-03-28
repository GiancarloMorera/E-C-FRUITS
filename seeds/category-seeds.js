const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'red',
  },
  {
    category_name: 'pink',
  },
  {
    category_name: 'yellow',
  },
  {
    category_name: 'mixed colors',
  },
  {
    category_name: 'orange',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
