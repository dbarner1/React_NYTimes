import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { titleCaseMe } from '../helpers/titleCaseMe';
import { formatThisTime } from '../helpers/formatThisTime';

var BigHeroClipTimeEST;

class BigHeroClip extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      imgURL: '',
    };
  }


  componentWillReceiveProps(nextProps) {
    BigHeroClipTimeEST = formatThisTime(nextProps.story.published_date);
    console.log(nextProps.story)
  }

  render() {
    return (
      <div className="bigHeroClipWrapper">
        <NavLink exact to={`/story?url=${ this.props.story.url }&title=${ this.props.story.title }&byline=${this.props.story.byline}`}>
          <div className="bigHeroClipSectionTop">
            <div className="bigHeroClipSubSection">
              <h2>{ this.props.story.title }</h2>
              <p className="bigHeroByline">{ titleCaseMe(this.props.story.byline) }</p>
              <p> { BigHeroClipTimeEST }</p>
            </div>
            <div>
              <img alt="" className="bigHeroImage" src={'https://virginiafrancoresumes.com/wp-content/uploads/2015/09/Newspaper-3.jpg'}/>
            </div>
          </div>
          <div className="bigHeroClipSectionBottom">
            <div className="bigHeroClipSubSection">
              <p>{ this.props.story.abstract }</p>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default BigHeroClip;
