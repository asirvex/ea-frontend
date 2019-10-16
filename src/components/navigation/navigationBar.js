import React, { Component } from "react";
import './navbar.css'

class Navbar extends Component {
render() {
  return (
    <nav className="navbar navbar-dark bg-company-green">
        <a className="navbar-brand" href="#">Navbar</a>
        <form className="form-inline my-1">
            <div className="md-form form-sm my-0">
            <input className="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search"
                aria-label="Search" />
            </div>
            <button className="btn btn-outline-white btn-sm my-0" type="submit">Search</button>
        </form>
    </nav>
    );
  }
}

export default Navbar;