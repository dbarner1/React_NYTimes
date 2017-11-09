import React, { Component } from 'react';

class FullStory extends Component {
  constructor() {
    super();
    this.state = {
      storyDisplayed: 'http://dbarner1.github.io'
    };
  }

  render() {
    return (
      <div className="fullStoryWrapper">
         <h1>{this.props.storyTitle}</h1>
         <p>{this.props.storyByline}</p>
         <p className="fullStoryIFrameDidntLoad"><a rel="noopener noreferrer" target="_blank" href='https://www.nytimes.com/subscription/multiproduct/lp8HYKU.htmlPage'>Story not displaying?</a></p>
         <div className="fullStoryIFrameParent">
           <iframe className="fullStoryIframeStory" src={this.props.storyUrl} title="iframe example 1" width="90%" height="500">
             <p>Your browser does not support iframes.</p>
           </iframe>
         </div>
      </div>
    );
  }
}

export default FullStory;
