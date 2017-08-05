import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { removeProduct } from '../../actions';

import {
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';

import './index.css';

class ProductsTableRows extends Component {
  render() {
    return (
      <TableBody>
        {_.map(this.props.products, ({name}, id) => (
          <TableRow key={id}>
            <TableRowColumn>{name}</TableRowColumn>
            <TableRowColumn>{this.props.meta[id].comment}</TableRowColumn>
            <TableRowColumn>{this.props.meta[id].quantity}</TableRowColumn>
            <TableRowColumn><FlatButton label="Remove" secondary /></TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    );
  }
}

ProductsTableRows.propTypes = {
  products: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    meta: state.cart.meta
  }
}

export default connect(mapStateToProps, { removeProduct })(ProductsTableRows);
