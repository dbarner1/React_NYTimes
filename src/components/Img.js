import React, { Component } from 'react';

var src;

class Img extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

componentWillReceiveProps() {
  this.setState({imgType: this.props.imgs })
}

  render() {
    return (
        <img alt='hero' src={'http://google.com'} />
    );
  }
}

export {Img};
