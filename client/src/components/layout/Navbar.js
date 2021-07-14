import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "css/assets/mstile.png";
import { logout } from "actions/auth";

const RfuNavbar = ({ isAuthenticated, logout }) => {
  const [toggle, setToggle] = useState(false);

  const handleExpanded = () => {
    !toggle ? setToggle(true) : setToggle(false);
  };

  return (
    <Navbar
      className="navbar_box_shadow"
      expand="lg"
      expanded={toggle}
      onToggle={handleExpanded}
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand className="u-margin-left-2">
        <span>
          <img className="logo" src={logo} alt=" RFuW Engineering Logo" />
        </span>{" "}
        RFuW Engineering
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="rfu_navbar u-margin-right-5"
      >
        <Nav className="font__size-2 u-padding--1">
          {isAuthenticated && (
            <Nav.Item onClick={handleExpanded} className="navbar__item">
              <NavLink
                className="navbar__link text-center u-padding--05 u-margin-right-3"
                activeClassName="underline-navbar"
                exact
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </Nav.Item>
          )}
          <Nav.Item onClick={handleExpanded} className="navbar__item">
            <NavLink
              className="navbar__link text-center u-padding--05 u-margin-right-3"
              activeClassName="underline-navbar"
              exact
              to="/"
            >
              Home
            </NavLink>
          </Nav.Item>

          <NavDropdown
            bsPrefix={`navbar__link u-padding--05 u-margin-right-3 navbar__item`}
            title="Products"
            id="nav-dropdown"
          >
            <NavDropdown.Item
              eventKey="4.1"
              onClick={handleExpanded}
              className="navbar__item-dropdown u-padding--05"
              as={NavLink}
              to="/switches"
            >
              RF Switches
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="4.2"
              onClick={handleExpanded}
              className="navbar__item-dropdown"
              as={NavLink}
              to="/limiters"
            >
              RF Limiters
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="4.3"
              onClick={handleExpanded}
              className="navbar__item-dropdown"
              as={NavLink}
              to="/colimiters"
            >
              Connectorized Limiters
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="4.4"
              onClick={handleExpanded}
              className="navbar__item-dropdown"
              as={NavLink}
              to="/swdrivers"
            >
              RF Switch Drivers
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item onClick={handleExpanded} className="navbar__item">
            <NavLink
              exact
              to="/about"
              activeClassName="underline-navbar"
              className="navbar__link text-center u-padding--05 u-margin-right-3"
            >
              About Us
            </NavLink>
          </Nav.Item>
          <Nav.Item onClick={handleExpanded} className="navbar__item">
            <NavLink
              exact
              to="/news"
              activeClassName="underline-navbar"
              className="navbar__link text-center u-padding--05 u-margin-right-3"
            >
              News
            </NavLink>
          </Nav.Item>
          <Nav.Item onClick={handleExpanded} className="navbar__item">
            <NavLink
              exact
              to="/salerep"
              activeClassName="underline-navbar"
              className="navbar__link text-center u-padding--05 u-margin-right-3"
            >
              Sales Rep
            </NavLink>
          </Nav.Item>
          <Nav.Item onClick={handleExpanded} className="navbar__item">
            <NavLink
              exact
              to="/contactus"
              activeClassName="underline-navbar"
              className="navbar__link text-center u-padding--05 u-margin-right-3"
            >
              Contact Us
            </NavLink>
          </Nav.Item>
          {isAuthenticated && (
            <Nav.Item onClick={handleExpanded} className="navbar__item">
              <NavLink
                exact
                to="/"
                onClick={logout}
                className="navbar__link text-center u-padding--05 u-margin-right-3"
              >
                Logout
              </NavLink>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { logout })(RfuNavbar);
