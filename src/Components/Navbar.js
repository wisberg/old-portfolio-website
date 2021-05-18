import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../NavBar.css";
import duffLogo from "./assets/DuffPortfolioLogo.png";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <Navbar dark expand="md" sticky={"top"} className="navBar">
        <NavbarBrand>
          <img id="logo" src={duffLogo} alt="duff portfolio logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navLink" href="#projects">
                projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navLink" href="#about">
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navLink" href="#contact">
                contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navLink" href="/resume">
                resume
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="navLinks" nav caret>
                links
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="https://github.com/wisberg" target="_blank">
                  github
                </DropdownItem>
                <DropdownItem href="https://codepen.io/wisberg" target="_blank">
                  codePen
                </DropdownItem>
                <DropdownItem
                  href="https://edabit.com/user/76kueisBB2rRkCLLA"
                  target="_blank"
                >
                  edabit
                </DropdownItem>
                <DropdownItem
                  href="https://www.linkedin.com/in/duff-isberg-39a712106/"
                  target="_blank"
                >
                  linkedin
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;
