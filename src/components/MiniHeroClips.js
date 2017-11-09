import React, { Component } from 'react';
import { MiniHeroClip } from './index';
import { scrubStories } from '../helpers/scrubStories';
import { titleCaseMe } from '../helpers/titleCaseMe';

var miniHeroClipsToMap = [];

class MiniHeroClips extends Component {
  constructor() {
    super();
    this.state = {
      subStories: '',
      key: 0
    };
  }

  componentWillReceiveProps(props) {
    miniHeroClipsToMap = scrubStories('schema_1', props.subStories, this.state.key)
}

  render() {
    return (
      <div className="miniHeroClipsWrapper">
      {
        miniHeroClipsToMap.map(function(clip, i) {
            return <MiniHeroClip key={clip.key} datePublished={clip.datePublished} byline={titleCaseMe(clip.byline)} url={clip.url} headline={clip.headline} snippet={clip.snippet} />
        }
      )
      }
      </div>
    );
  }
}

export default MiniHeroClips;
