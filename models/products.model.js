    
'use strict';

const uuid = require('uuid/v4');

const schema = {  
  price: { required: 'number' },
  weight: { required: 'number' },
  quantity_in_stock: { required: 'number' }
}
//category_id: { required: 'string' },

class Product {
  constructor(record) {
    record.id = uuid();// category_id

    if (this.isValid(record)) { return record }
    else { return undefined };
  }

  isValid(data) {
    return true;
  }
}

module.exports = Product;