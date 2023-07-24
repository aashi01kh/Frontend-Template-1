import React from 'react';
import './Footer.css';

const BlueFooter = () => {
  return (
    <div className="blue-footer">
      <div className="left-half">
        <div className="left-text">
          <h1>Text on the left side Lorem</h1>
          
        </div>
      </div>
      <div className="right-half">
        <div className="text-box">
          <textarea placeholder="Type here"></textarea>
        </div>
        <div className="button-box">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BlueFooter;
