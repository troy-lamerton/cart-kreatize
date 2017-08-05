import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn
} from 'material-ui/Table';

import './index.css';

const ProductsTable = (props) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      selectable={false}>
      {_.map(props.headers, (headerString, index) => <TableHeaderColumn key={index}>{headerString}</TableHeaderColumn>)}
    </TableHeader>
    <TableBody>
    {props.children}
    </TableBody>
  </Table>
);

ProductsTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ProductsTable;
