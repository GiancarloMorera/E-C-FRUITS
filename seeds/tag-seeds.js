const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'food',
  },
  {
    tag_name: 'fruit',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'tropical',
  },
  {
    tag_name: 'seasonal',
  },
  {
    tag_name: 'sweet',
  },
  {
    tag_name: 'tart',
  },
  {
    tag_name: 'tangy',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
