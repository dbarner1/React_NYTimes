import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { formatThisTime } from '../helpers/formatThisTime';

var ClipTimeEST, imgURL;

class Clip extends Component {
  constructor() {
    super();
    this.state = {
      timeEST: '',
      storyTitle: '',
      storyByline: '',
      imgURL: '../img/magnifying_glass.svg',
    };
  }

  componentWillMount() {
    ClipTimeEST = formatThisTime(this.props.datePublished);
    if(typeof this.props.img[0] === 'undefined') {
      imgURL = 'https://virginiafrancoresumes.com/wp-content/uploads/2015/09/Newspaper-3.jpg';
    }
    else {
      imgURL = this.props.img[0].url;
    }
    this.setState({imgURL: imgURL});
  }

  render() {
    return (
      <NavLink exact to={`/story?url=${this.props.url}&title=${this.props.title}&byline=${this.props.byline}`}>
        <div className="clipWrapper">
          <div className="clipImageWrapper">
            <img alt="Search Result" className="clipImage" src={this.state.imgURL}/>
          </div>
          <div className="clipText">
            <h2>{ this.props.title }</h2>
            <p>{ this.props.snippet }</p>
            <p>{ this.props.byline } { ClipTimeEST }</p>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default Clip;
