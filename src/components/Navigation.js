import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="navWrapper">
            <NavLink activeClassName="activeLink" className="navItem" exact to="/"><li>Home</li></NavLink>
            <NavLink activeClassName="activeLink" className="navItem" to="/world"><li>World</li></NavLink>
            <NavLink activeClassName="activeLink" className="navItem" to="/unitedstates"><li>US</li></NavLink>
            <NavLink activeClassName="activeLink" className="navItem" to="/politics"><li>Politics</li></NavLink>
            <NavLink activeClassName="activeLink" className="navItem" to="/newyork"><li>N.Y.</li></NavLink>
            <NavLink activeClassName="activeLink" className="navItem" to="/more"><li>More</li></NavLink>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
