/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

const Products = require('../products/products.js');

let products;

beforeEach(() => {
  products = new Products();
});

describe('Products  Model', () => {

  it('can post() a new products', () => {
    let obj = { price: 31, weight: 15, quantity_in_stock: 13, };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a products', () => {
    let obj = { price: 31, weight: 15, quantity_in_stock: 13, };
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a product', () => {
    let obj = { price: 31, weight: 15, quantity_in_stock: 13, };
    return products.create(obj)
      .then(record => {
        products.get(record);
        products.update(record._id, record)
          .then(prod => {
            Object.keys(obj).forEach(key => {
              expect(prod[key]).toEqual(obj[key]);
            });
          });
      })
      .catch(error => console.error('Error : Something Goes Wrong', error));
  }); // end of update method

  it('can delete() a product', () => {
    let obj = { price: 31, weight: 15, quantity_in_stock: 13, };
    return products.create(obj)
      .then(record => {
        products.get(record);
        products.delete(record._id)
          .then(prod => {
            Object.keys(obj).forEach(key => {
              expect(prod[key]).toEqual(obj[key]);
            });
          });
      })
      .catch(error => console.error('Error : Something Goes Wrong', error));
  });

});

















// 'use strict';

// const Product = require('../models/product.modular.js');

// describe('Product Model', () => {

//   let product;

//   beforeEach(() => {
//     product = new Product();
//   });

//   it('can post() a new product item', () => {
//     let obj = {
//       price: 56,
//       weight: 24,
//       quantity_in_stock: 8
//     };
//     // category_id: { required: 'string' },

//     return product.create(obj)
//       .then(record => {
//         Object.keys(obj).forEach(key => {
//           expect(record[key]).toEqual(obj[key]);
//         })
//       })
//       .catch(err => console.error(err));
//   });

//   it('can get() a product item', () => {
//     let obj = {
//       price: 56,
//       weight: 24,
//       quantity_in_stock: 8
//     };
//     // category_id: { required: 'string' },

//     return product.create(obj)
//       .then(record => {
//         return product.get(record.id)
//           .then(product => {
//             Object.keys(obj).forEach(key => {
//               expect(product[0][key]).toEqual(obj[key]);
//             })
//           })
//       })
//   });

// });