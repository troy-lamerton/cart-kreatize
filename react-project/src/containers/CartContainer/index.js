import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';

import './index.css';

class CartContainer extends Component {
  render() {
    return (
      
      <div className="cart">
        <div>
          <p>The cart is below</p>
          <p>Products</p>
          {JSON.stringify(this.props.products)}
          <hr />
          <p>Meta</p>
          {JSON.stringify(this.props.meta)}
          <hr />
        </div>
        <RaisedButton
          label="Football"
          icon={<span className="add-icon">+</span>}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    meta: state.cart.meta
  }
}

export default connect(mapStateToProps)(CartContainer);
