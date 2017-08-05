import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import db from '../../products.json';
import { addProduct } from '../../actions';

import ProductsTable from '../../components/ProductsTable';
import ProductsTableRows from '../ProductsTableRows';

import RaisedButton from 'material-ui/RaisedButton';

import './index.css';

class CartContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <p>The cart is below</p>
          <p>Products table</p>
          <ProductsTable headers={['Name', 'Comment', 'Quantity', 'Remove']}>
            <ProductsTableRows />
          </ProductsTable>
          {JSON.stringify(this.props.products)}
          <p>Meta</p>
          {JSON.stringify(this.props.meta)}
          <hr />
        </div>
        {/*render a +button for each possible product, if it is not in the cart*/}
        <div className="flex-list">
          {_.map(db, ({name}, id) => (
            !this.props.products.hasOwnProperty(id) && <RaisedButton
              key={id}
              label={name}
              style={{marginRight: 6}}
              icon={<span className="add-icon">+</span>}
              onClick={() => this.props.addProduct(id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

CartContainer.propTypes = {
  products: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products
  }
}

export default connect(mapStateToProps, { addProduct })(CartContainer);
