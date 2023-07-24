import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import './BlueSpace.css';

const BlueSpace = () => {
  return (
    <div className="blue-space bg-primary py-1 px-2 d-flex justify-content-between align-items-center">
      <div className="left-half text-white font-weight-bold">We are open 24/7</div>
      <div className="right-half text-white">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mr-2">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mr-2">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-2">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FontAwesomeIcon icon={faGithub} />
        </a> */}
      </div>
    </div>
  );
};

export default BlueSpace;
