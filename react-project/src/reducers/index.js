import _ from 'lodash';

import * as types from '../types';
import db from '../products.json';

export const initialState = {
  cart: {
    products: {
      /*"<product-id>": {
        name: "string",
        price: 1.00,
        tax: 0.07 || 0.19
      },*/
    },
    meta: {
      /*"<product-id>": {
        added: new Date(),
        quantity: 0,
        comment: "editable string"
      }*/
    }
  }
};

function generateProductMeta () {
  return {
    added: Date.now(),
    quantity: 1,
    comment: ""
  };
}

export function cartReducer(state = initialState, action = {}) {
  const id = action.payload;
  let cart = state.cart;
  let products;
  let meta;

  switch (action.type) {
    case types.ADD_PRODUCT:
      console.info('cartReducer: Add product', action);
      // assumes product is not in cart already
      // action.payload = "<product-id>"
      const newProduct = _.cloneDeep(db[id]); // product object must be a fresh js object
      products = _.assign({}, cart.products, {[id]: newProduct});
      meta = _.assign({}, cart.meta, {[id]: generateProductMeta()});
      cart = _.assign({}, cart, { products, meta });
      return { cart };

    case types.REMOVE_PRODUCT:
      console.info('cartReducer: Remove product', action);
      // assumes product is in the cart
      // action.payload = "<product-id>"

      // create new object omitting product to be removed
      products = _.omitBy(cart.products, (value, key) => key === id);
      meta = _.omitBy(cart.meta, (value, key) => key === id);
      cart = _.assign({}, cart, { products, meta });
      return { cart };

    default:
      return state;
  }
}

const reducer = cartReducer // combineReducers({  });

export default reducer;
