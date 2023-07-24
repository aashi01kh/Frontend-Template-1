import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

const ServiceBox = ({ title, content }) => {
  return (
    <div className="service-box">
      <div className="icon">
        {/* Replace faMoneyBillAlt with the icon you want to use */}
        <FontAwesomeIcon icon={faMoneyBillAlt} size="lg" />
      </div>
      <br/>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Random Text 1</p>
      <p>Random Text 2</p>
    </div>
  );
};

export default ServiceBox;
