import React, { Component } from 'react';
import { BrowserRouter,Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Home from './home'
import AddProject from './addProject'
import UpdateProject from './updateProject'
import OverviewAndExpenses from './overviewAndExpenses'

import '../styles/main.css';
import '../styles/xsscreen.css';

class NavBar extends Component {

render(){


return(
    <nav class="navbar  navbar-inverse fixed-top navbar-expand-lg navbar-dark">

    <div className="bg-color">
    <div class="container-fluid-nav text-center">

    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarNav">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
    </button>

      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav">

          <li class="nav-item">
            <NavLink to="/">HOME</NavLink>
            {/*<a class="nav-link" href="#">HOW IT WORKS</a>*/}
          </li>
          <li>
            <NavLink to="/addProject">ADD PROJECT</NavLink>
            {/*<a class="nav-link" href="#">BACKGROUND</a>*/}
          </li>
          <li>
            <NavLink to="/updateProject">UPDATE PROJECT</NavLink>
          </li>
          <li >
            <NavLink to="/overviewAndExpenses">OVERVIEW AND EXPENSES</NavLink>
          </li>
        </ul>

      </div>
      </div>
      </div>
    </nav>

  )}
  // end of return and render
} // end of Component


export default NavBar;