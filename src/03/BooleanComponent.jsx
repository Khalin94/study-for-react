// eslint-disable-next-line
import React, { Component } from 'react';

class BooleanComponent extends Component {
  render() {
    //상위 컴포넌트에서 bored라는 프로퍼티만 써도 해당 프로퍼티는 true로 된다. 반면 bored 프로퍼트를 쓰지 않으면 undefined이므로 false 값이 나오게된다.
    /* 
    // true값을 넘겨줌
    <BooleanComponent bored></BooleanComponent>
    // false값을 넘겨줌
    <BooleanComponent></BooleanComponent>
    */

    const message = this.props.bored ? '놀러 가자' : '하던 일 열심히 마무리하기';
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;
