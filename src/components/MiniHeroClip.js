import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { formatThisTime } from '../helpers/formatThisTime';

var timeEST;

class MiniHeroClip extends Component {
  constructor() {
    super();
    this.state = {
      subStories: ''
    };
  }

  componentWillMount() {
    timeEST = formatThisTime(this.props.datePublished);
  }

  render() {
    return (
      <NavLink exact to={`/story?url=${this.props.url}&title=${this.props.headline}&byline=${this.props.byline}`}>
        <div className="miniHeroClip">
          <h3>{this.props.headline}</h3>
          <p>{this.props.byline } {timeEST}</p>
        </div>
      </NavLink>
    );
  }
}

export default MiniHeroClip;
