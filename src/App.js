import React, { Component } from 'react';
import { Switch, BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import { Results, Story, Hero } from './containers/index.js';
import { Navigation } from './components/index';

class App extends Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.state = {
      searchQuery: '',
      searchPath: '',
      RedirectToSearch: false,
    };
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      let query = this.query.value;
      this.setState({ searchQuery: query })
      this.setState({ searchPath: `/results?query=${query}` })
      this.setState({ RedirectToSearch: true })
    }
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <div className="globalWrapper">
          <header>
            <div className="appHeaderTitleSection">
              <Link to="/"><h1 className="appHeaderTitle">THE TIMES</h1></Link>
              <div className="appHeaderSearch">
                <img alt="magnifine glass" className='AppMagnifineGlass' src={require('./img/magnifying_glass.svg')} />
                <input placeholder="Search" type="text" value={this.state.value} ref={(input) => this.query = input } onKeyPress={this.handleKeyPress} />
              </div>
            </div>
            <Navigation />
          </header>
          <Switch>
            <Route exact path="/" render={props => <Hero type="home" {...props} />}/>
            <Route exact path="/world" render={props => <Hero type="world" {...props} />}/>
            <Route exact path="/unitedstates" render={props => <Hero type="national" {...props} />}/>
            <Route exact path="/politics" render={props => <Hero type="politics" {...props} />}/>
            <Route exact path="/newyork" render={props => <Hero type="nyregion" {...props} />}/>
            <Route exact path="/more" render={props => <Hero type="home" {...props} />}/>
            <Route path="/story" component={Story}/>
            <Route path="/results" render={props => <Results query={this.state.searchQuery} {...props} />}/>
          </Switch>
          { this.state.RedirectToSearch &&
              <Redirect to={`${this.state.searchPath}`}/>
          }

          </div>
          <div className = "Appfooter">
            <p>All the news that's fit to develop!</p>
            <p>The Times, Inc., 2017</p>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
