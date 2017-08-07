import _ from 'lodash';

import db from '../products.json';
import helper from '../helpers/dbRelated';
import * as actions from '../actions';

import reducer, { initialState } from './index';

test('store is unchanged by empty action', () => {
  const state1 = reducer(initialState);
  const state2 = reducer(state1, {});
  expect(state1).toBe(state2);
});

test('add product creates new meta and product', () => {
  const state1 = reducer(initialState);
  const productId = helper.chooseRandomKey(db);
  const stateAfterAdd = reducer(state1, actions.addProduct(productId));
  const { products, meta } = stateAfterAdd.cart;
  expect(_.size(products)).toBe(1);
  expect(_.size(meta)).toBe(1);
  expect(products).toBe(expect.objectContaining({
    [productId]: expect.any(Object)
  }));
});
