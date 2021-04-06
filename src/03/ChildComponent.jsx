import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    // 구조분해할당으로 props 할당
    // 이렇게 프로퍼티를 할당하면 {this.props.boolValue} 처럼 this.props를 붙히지 않고 변수명만 적어주면 됨 {boolValue}
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <span>{boolValue}</span>
        <span>{numValue}</span>
        <span>{arrayValue}</span>
        <span>{String(objValue)}</span>
        <span>{nodeValue}</span>
        <span>{String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
