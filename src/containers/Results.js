import React, { Component } from 'react';
import { ResultClips, BreadCrumb,  } from '../components/index.js';
import  { retrieveDateParams } from '../helpers/retrieveDateParams';

var resultsQuery;

class Results extends Component {
  constructor() {
    super();
    this.state = {
      clips: '',
      type: '',
      noResults: true,
    };
  }

  updateStories(query) {
    var story_results;
    resultsQuery = query ? query : "New York Times" ;
    var BASE_URI = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?'
    var API_KEY_PARAM = 'api-key=a8457610b68381085a3fff38d6a36337:6:74255139';
    var DATE_PARAMS = retrieveDateParams(365);
    var QUERY_TERMS_PARAM = `&fq=${resultsQuery}`;
    var FACET_FIELD_PARAM = '&facet_field=day_of_week';
    var PARAMS =  API_KEY_PARAM + DATE_PARAMS + FACET_FIELD_PARAM + QUERY_TERMS_PARAM;
    var url = BASE_URI + PARAMS;

    fetch(url) //Note for reviewer: This app intentionally not supporting IE. Could replace with request.get if neededing to.
      .then(response => response.json())
      .then(response => story_results = response)
      .then(stories => this.setState({clips: story_results.response.docs}))
      .then(stories => this.setState({noResults: false}))
      .catch(error => this.setState({noResults: true }))
  }

  componentWillMount() {
    this.updateStories(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
      this.updateStories(nextProps.query);
  }

  render() {
    return (
       <div className="resultsWrapper">
        <BreadCrumb pageHistory={
          [{"name": "Home",
             "url": "/"
           },
           {"name": "Results"
          }]
        } />
        { !this.state.clips.toString() && (<div className="resultsDisplayingFor"><p>Sorry, we have no results for that search.</p></div>)}
        { this.state.clips.toString() && (<div className="resultsDisplayingFor"><p>Displaying results for "{resultsQuery}":</p></div>)}
        <div className="resultClipsWrapper">
          <ResultClips ref={this.state.clips} clips = {this.state.clips} />
        </div>
      </div>
    )
  }
}

export default Results;
