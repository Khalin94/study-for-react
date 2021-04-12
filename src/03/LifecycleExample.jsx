import React from 'react';

class LifecycleExample extends React.Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');

    return {};
  }

  constructor(props) {
    super(props);

    this.state = {};
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    //this.setState({ updated: true });
    this.forceUpdate();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnMount');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshowBeforeUpdate');

    return {};
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');

    return false;
  }

  render() {
    console.log('render');

    return null;
  }
}

export default LifecycleExample;
