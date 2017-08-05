import React from 'react';
import PropTypes from 'prop-types';

const percentFormatter = new Intl.NumberFormat(undefined, {style: 'percent'});

const Percent = ({value}) => (
  <span>{percentFormatter.format(value)}</span>
);

Percent.propTypes = {
  value: PropTypes.number.isRequired
}

export default Percent;
