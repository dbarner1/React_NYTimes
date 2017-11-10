import React, { Component } from 'react';
import { Clip } from './index';
import { titleCaseMe } from '../helpers/titleCaseMe';
import { scrubStories } from '../helpers/scrubStories';
var Infinite = require('react-infinite');

var result_clips_to_map = [];

class ResultClips extends Component {
  constructor() {
    super();
    this.state = {
      key: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
      result_clips_to_map = scrubStories('schema_2', nextProps.clips, this.state.key);

      if(result_clips_to_map === undefined ) {
        result_clips_to_map = [];
      }
  }

  render() {
    return (
      <div className="resultClipsWrapper">
        <Infinite containerHeight={600} elementHeight={130}>
          {
            result_clips_to_map.map(function(clip, i) {
              if(i>2) {
                return <Clip key={clip.key} img={false} url={clip.url} title={clip.title} snippet = {clip.snippet} byline = {titleCaseMe(clip.byline)} datePublished = {clip.datePublished} />
              }
              return false;
            })
          }
       </Infinite>
      </div>
    );
  }
}

export default ResultClips;
