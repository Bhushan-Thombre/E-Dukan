// Here <a> tag is used instead of <Link> tag due to styling issues but <Link> tag should be used because using <a> tag whenever we
// click the link the page will load and using <Link> tag single page application is implemented

import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <h4 className="text-center">eDukan</h4>
            <p>
              eDukan is a dummy e-commerce website created using the MERN stack.
              The website contains many functionalities such as user
              login/registration, cart and wishlist management, third party api
              integration for payments, etc. Check it out!
            </p>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <h4 className="text-center">Quick Links</h4>
            <div className="text-center my-3">
              <a href="/">Home</a>
            </div>
            <div className="text-center my-3">
              <a href="/cart">Cart</a>
            </div>
            <div className="text-center my-3">
              <a href="/login">Login</a>
            </div>
            <div className="text-center my-3">
              <a href="/">About</a>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <h4 className="text-center">Get In Touch</h4>
            <div className="text-center my-3">
              <a href="https://www.instagram.com/_tbhushan._/">
                <i className="fa-brands fa-instagram fa-lg mx-2"></i>
                _tbhushan._
              </a>
            </div>
            <div className="text-center my-3">
              <a href="https://github.com/Bhushan-Thombre">
                <i className="fa-brands fa-github fa-lg mx-2"></i>
                Bhushan-Thombre
              </a>
            </div>
            <div className="text-center my-3">
              <a href="https://www.linkedin.com/in/bhushan-thombre-209910207/">
                <i className="fa-brands fa-linkedin fa-lg mx-2"></i>
                Bhushan Thombre
              </a>
            </div>
            <div className="text-center my-3">
              <a href="https://twitter.com/bhushanat11">
                <i className="fa-brands fa-twitter fa-lg mx-2"></i>
                bhushanat11
              </a>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <h4 className="text-center">Contact</h4>
            <div className="text-center my-3">
              <i className="fa-solid fa-location-dot fa-lg mx-2"></i>
              123, Demo street, Demo road, Demo city, Demo state, India, 431002
            </div>
            <div className="text-center my-3">
              <i className="fa-solid fa-phone mx-2"></i>+91 1234567890
            </div>
            <div className="text-center my-3">
              <i className="fa-solid fa-envelope mx-2"></i>
              bhushanthombre2001@gmail.com
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; 2022. All Rights Reserved by eDukan
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
