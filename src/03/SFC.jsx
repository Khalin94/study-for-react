import React from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  const { somePropsValue } = props;
  const { someContextValue } = context;

  return <h1>Hello, {somePropsValue} </h1>;
}

SFC.propTypes = {
  somePropsValue: PropTypes.any,
};

SFC.defaultProps = {
  somePropsValue: 'default Value',
};

export default SFC;
