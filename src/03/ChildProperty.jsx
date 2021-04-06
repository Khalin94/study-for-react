import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
  render() {
    //this.props.children을 통해서 상위 컴포넌트의 노드를 받아올 수 있다.
    /*
    상위 컴포넌트에서 아래처럼 ChildProperty 컴포넌트를 불러내면 ChildProperty 컴포넌트 안에서 this.props.children을 통해 div span을 불러 올 수 있다.
    <ChildProperty>
        <div><span>노드</span></div>
    </ChildProperty>
    */
    console.log(this.props.children);
    return <div>{this.props.children}</div>;
  }
}
ChildProperty.propTypes = {
  children: PropTypes.node,
};

export default ChildProperty;
