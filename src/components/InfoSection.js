import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const InfoSection = () => {
  return (
    <div className="info-section" style={{ backgroundColor: 'rgb(230, 245, 250)', minHeight: '300px' }}>
      <Container>
        <Row>
          <Col xs={12} md={6} className="d-flex align-items-center">
            <div className="info-text">
              <h3>Some Text on the Left Side</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ligula nec elit interdum hendrerit
                non ac odio. Quisque ultricies congue eleifend.
              </p>
              <Button variant="primary">Learn More</Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="Your Image"  style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}  />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoSection;
