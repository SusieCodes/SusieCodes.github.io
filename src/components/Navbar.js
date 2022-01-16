import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./../images/SusieStanleyLogo.svg";

export const MyNavbar = () => {
  return (
    <>
      {/* collapses at < 768px */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        fixed="top"
        className="m-auto"
      >
        <div
          className="logo-holder"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img className="logo" src={logo} alt="logo" />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#about">About&nbsp;</Nav.Link>
            <Nav.Link eventKey={2} href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link eventKey={3} href="#tech">
              Tech
            </Nav.Link>
            <Nav.Link
              eventKey={4}
              href="https://susiecodes.github.io/resume.pdf"
              target="_blank"
            >
              Resumé
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
