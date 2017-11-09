import React, { Component } from 'react';
import { BigHeroClip, Clips, MiniHeroClips } from '../components/index.js';
import  { retrieveDateParams } from '../helpers/retrieveDateParams';

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      stories: '',
      clips: '',
      featuredClip: '',
      featuredSubStories: [],
      type: '',
      lastUrl: '',
    };
  }

  updateStories(type) {
    var subStories;
    var TYPE = type;
    var API_KEY_PARAM = 'api-key=a8457610b68381085a3fff38d6a36337:6:74255139';
    var DATE_PARAMS = retrieveDateParams(6);
    var PARAMS = API_KEY_PARAM + DATE_PARAMS;
    var url = 'http://api.nytimes.com/svc/topstories/v2/' + TYPE + '.json?'+ PARAMS;

    fetch(url) //Note for reviewer: This app intentionally not supporting IE. Could replace with request.get if neededing to.
      .then(response => response.json())
      .then(response => this.setState({clips: response}))
      .then(stories => this.setState({featuredClip: this.state.clips.results[0]}))
      .then(stories => subStories = [this.state.clips.results[1], this.state.clips.results[2]])
      .then(stories => this.setState({featuredSubStories: subStories }))
      .catch(error => console.error("No data returned"));
  }

  componentWillMount() {
    this.setState({type: this.props.type})
    this.updateStories(this.props.type)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.state.type) {
      this.setState({ type: nextProps.type });
      this.updateStories(nextProps.type);
    }
  }

  render() {
    return (
      <div className="heroWrapper">
        <div className="heroFirstDiv">
          <h1 className="heroTopStories">Top Stories</h1>
            <div className="heroClips">
              <BigHeroClip story = { this.state.featuredClip } />
              <MiniHeroClips subStories = { this.state.featuredSubStories } />
            </div>
        </div>
          <Clips ref={this.state.clips} type={this.state.type} clips = {this.state.clips.results} />
     </div>
    );
  }
}

export default Hero;
