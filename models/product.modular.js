'use strict';

const Categories = require('../categories/categories.js');
const ProductModel = require('./products.model.js');

class Product extends Categories {
  constructor() {
    super(ProductModel);
  }
}

module.exports = Product;