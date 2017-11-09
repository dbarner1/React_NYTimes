import React, { Component } from 'react';
import { FullStory, BreadCrumb } from '../components/index.js';

class Story extends Component {
  constructor() {
    super();
    this.state = {
      storyUrl: '',
      storyTitle: '',
      storyByline: '',
    };
  }

  componentWillMount() {
    var url_string = window.location.href;
    var url = new URL(url_string);

    var urlParam = url.searchParams.get("url");
    var titleParam = url.searchParams.get("title");
    var byLineParam = url.searchParams.get("byline");

    this.setState({storyUrl: urlParam});
    this.setState({storyTitle: titleParam});
    this.setState({storyByline: byLineParam})
  }

  render() {
    return (
      <div className="storyWrapper">
        <BreadCrumb pageHistory=
        {
         [{"name": "Home",
            "url": "/"
          },
          {"name": "This Story"
         }]
        } />
        <FullStory storyUrl={this.state.storyUrl} storyByline={this.state.storyByline} storyTitle={this.state.storyTitle} />
      </div>
    );
  }
}

export default Story;
