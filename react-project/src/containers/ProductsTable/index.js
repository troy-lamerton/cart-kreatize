import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { removeProduct } from '../../actions';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

import './index.css';

const ProductsTable = (props) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
      selectable={false}>
      {_.map(props.headers, (headerString, index) => <TableHeaderColumn key={index}>{headerString}</TableHeaderColumn>)}
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}>
      {_.map(props.products, ({name}, id) => (
        <TableRow key={id}>
          <TableRowColumn>{name}</TableRowColumn>
          <TableRowColumn>{props.meta[id].comment}</TableRowColumn>
          <TableRowColumn>{props.meta[id].quantity}</TableRowColumn>
          <TableRowColumn><FlatButton label="Remove" secondary onClick={() => props.removeProduct(id)}/></TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

ProductsTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  products: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    meta: state.cart.meta
  }
}

export default connect(mapStateToProps, { removeProduct })(ProductsTable);
