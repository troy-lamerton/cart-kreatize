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
    quantity: 0,
    comment: ""
  };
}

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCT:
      console.info('cartReducer: Add product', action);
      // assumes product is not in cart already
      // action.payload = "<product-id>"
      const id = action.payload;

      let cart = state.cart;
      const products = Object.assign({}, cart.products, {[id]: db[id]});
      const meta = Object.assign({}, cart.meta, {[id]: generateProductMeta()});
      cart = Object.assign({}, cart, { products, meta });
      return { cart };

    case types.REMOVE_PRODUCT:
      console.info('cartReducer: Remove product', action);
      return state;

    default:
      return state;
  }
}

const reducer = cartReducer // combineReducers({  });

export default reducer;
