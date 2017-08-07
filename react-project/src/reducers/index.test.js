import _ from 'lodash';

import db from '../products.json';
import { chooseRandomKey } from '../helpers/generic';
import * as actions from '../actions';

import reducer, { initialState } from './index';

test('store is unchanged by empty action', () => {
  const state1 = reducer(initialState);
  const state2 = reducer(state1, {});
  expect(state1).toBe(state2);
});

function addRandomProductToState (state) {
  const productId = chooseRandomKey(db);
  const stateAfterAdd = reducer(state, actions.addProduct(productId));
  return {
    stateAfterAdd,
    productId
  };
}

test('add product creates new meta and product', () => {
  const state1 = reducer(initialState);
  const { stateAfterAdd, productId } = addRandomProductToState(state1);
  const { products, meta } = stateAfterAdd.cart;
  expect(_.size(products)).toBe(1);
  expect(_.size(meta)).toBe(1);
  expect(products).toHaveProperty(productId);
  expect(meta).toHaveProperty(productId);
});

test('removed products are not in state', () => {
  const state1 = reducer(initialState);
  const { stateAfterAdd, productId } = addRandomProductToState(state1);
  const stateAfterRemove = reducer(stateAfterAdd, actions.removeProduct(productId));
  const { products, meta } = stateAfterRemove.cart;
  expect(products).not.toHaveProperty(productId);
  expect(meta).not.toHaveProperty(productId);
});

test('can update quantity without changing product', () => {
  expect('todo').toBe('done');
});
