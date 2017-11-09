import React, { Component } from 'react';
import { Clip } from './index';
import { scrubStories } from '../helpers/scrubStories';
import { titleCaseMe } from '../helpers/titleCaseMe';

var clips_to_map = [];

class Clips extends Component {
  constructor() {
    super();
    this.state = {
      key: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
      clips_to_map = scrubStories('schema_1', nextProps.clips, this.state.key);
      this.setState({key: clips_to_map[clips_to_map.length-1].key});
  }

  render() {
    return (
      <div>
          {
            clips_to_map.map(function(clip, i) {
              if(i>2) {
                return <Clip key={clip.key} url={clip.url} img={clip.img} title={clip.title} snippet = {clip.snippet} byline = {titleCaseMe(clip.byline)} datePublished = {clip.datePublished} />
              }
             return false;
            })
          }
      </div>

    );
  }
}

export default Clips;
