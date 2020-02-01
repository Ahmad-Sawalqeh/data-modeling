/* eslint-disable camelcase */
/* eslint-disable no-undef */
'use strict';

const DataModel = require('../memory-data-model.js');
// const uuid = require('uuid/v4');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true, },
      name: { required: true, },
      price: { required: 'number', },
      weight: { required: 'number', },
      quantity_in_stock: { required: 'number', },
    };
  }
}

module.exports = Products;

