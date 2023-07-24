
import React from 'react';
import ServiceBox from './ServiceBox';
import './Services.css'
const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2 className="text-center">Our Services</h2>
      <hr className="blue-line" />
      <div className="text-center">
        <br/>
        <p>First Line of Textsfbfkewjbfkewjb efnewnfefe fe f ef e fw e efwefwekf</p>
        <p>Second Line of Text rst Line of Textsfbfkewjbfkewjb efnewnfefe fe f ef e fw e efwefwekf</p>
      </div>
      <br/>
      <br/>
      <div className="service-boxes">
        <ServiceBox title="Financial Consultant" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ServiceBox title="Content Marketing" content="Praesent non dapibus magna, non dictum justo." />
        <ServiceBox title="Advisors" content="Vestibulum nec interdum nisi, ac luctus nisi." />
      </div>
      <div className="text-center">
        <button className="all-services-button">All Services</button>
      </div>
    </div>
  );
};

export default ServicesSection;
