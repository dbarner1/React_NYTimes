import React, { Component } from 'react';

var breadCrumbs = [];
var new_key;

class BreadCrumb extends Component {
  constructor() {
    super();
    this.state = {
      key: 0
    };
  }

  componentWillMount() {
    new_key = this.state.key + 1;
    this.setState({key: new_key});
    breadCrumbs = this.props.pageHistory;
}

  render() {
    return (
      <div>
         { breadCrumbs.map(function(page,i) {
           if((i+1)<breadCrumbs.length) {
            return ([<a key={i} href={page.url}>{page.name}</a>,<a> > </a>])
           }
           else {
             return <a key={ new_key } href={window.location.href}>{page.name}</a>
           }
         })
       }
      </div>
    );
  }
}

export default BreadCrumb;
