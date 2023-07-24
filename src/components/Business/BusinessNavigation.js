import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BusinessNavigation.css'
const BusinessNavigation = () => {
    const [activeLink, setActiveLink] = useState(null);
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
  
    return (
      <div className="business-navigation">
        <Container>
      
          <Row>
            <Col xs={6} md={6} className="text-center text-md-left">
              <p>Bisnes</p>
            </Col>
            <Col xs={6} md={6} className="text-center text-md-right">
              <div className="navigation">
                <span
                  className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                </span>
                <span
                  className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('about')}
                >
                  About
                </span>
                <span
                  className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('blog')}
                >
                  Blog
                </span>
                <span
                  className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('contact')}
                >
                  Contact
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default BusinessNavigation;