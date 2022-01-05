import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import vit from '../images/vit-logo.png';

class TopNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" style={{ maxHeight: '60px' }}>
        <Link to="/">
          <Navbar.Brand href="#home" className="navtitle">
            <img src={vit} alt="" className="logo" />
          </Navbar.Brand>
        </Link>

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav className="mr-auto"></Nav>
        <div class="nav-item dropdown ">
          <button
            class="btn btn-transparent"
            id="navbarDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i
              style={{ color: 'white', fontSize: '23px' }}
              class="fa fa-bars"
              aria-hidden="true"
            ></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <Link class="dropdown-item" to="/departments">
              Departments
            </Link>
            <Link class="dropdown-item" to="/library">
              Library
            </Link>
            <Link class="dropdown-item" to="/projects">
              Projects
            </Link>
            <Link class="dropdown-item" to="/committees">
              Committees
            </Link>
          </div>
        </div>
        {/* <Form inline>
            <button className="login-btn">Log In</button>
          </Form> */}
      </Navbar>
    );
  }
}

export default TopNav;
