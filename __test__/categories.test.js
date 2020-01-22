'use strict';

const Product = require('../models/product.modular.js');

describe('Product Model', () => {

  let product;

  beforeEach(() => {
    product = new Product();
  });

  it('can post() a new product item', () => {
    let obj = {
      price: 56,
      weight: 24,
      quantity_in_stock: 8
    };
    // category_id: { required: 'string' },

    return product.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        })
      })
      .catch(err => console.error(err))
  })

  it('can get() a product item', () => {
    let obj = {
      price: 56,
      weight: 24,
      quantity_in_stock: 8
    };
    // category_id: { required: 'string' },

    return product.create(obj)
      .then(record => {
        return product.get(record.id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[0][key]).toEqual(obj[key]);
            })
          })
      })
  });
});