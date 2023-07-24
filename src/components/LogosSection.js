import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faFileAlt, faRandom, faTags } from '@fortawesome/free-solid-svg-icons';

const LogosSection = () => {
  return (
    <div className="logos-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} sm={4} md={3} lg={2} className="text-center mb-4">
            <FontAwesomeIcon icon={faTools} size="2x" />
            <p>Construction</p>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="text-center mb-4">
            <FontAwesomeIcon icon={faFileAlt} size="2x" />
            <p>Dummy-logo</p>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="text-center mb-4">
            <FontAwesomeIcon icon={faRandom} size="2x" />
            <p>RandomLogo</p>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="text-center mb-4">
            <FontAwesomeIcon icon={faTags} size="2x" />
            <p>RandomBrand</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogosSection;
