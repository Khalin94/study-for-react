import React, { Component } from 'react';

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.reset = this.reset.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div>
        현재 카운트 : {this.state.count}
        <button onClick={this.increaseCount} onMouseOut={this.reset}>
          카운트 증가
        </button>
        버튼 밖으로 나오면 카운트가 리셋 됩니다.
      </div>
    );
  }
}

export default Counter3;
