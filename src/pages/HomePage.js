import React from 'react';

import './HomePage.css';
import Chicago from '../image/train_chi.jpeg';

const HomePage = () => {
  return (
    <div>
      HomePage
      <div id='overlay'>
        <img className='main-img' src={Chicago} alt='' />
      </div>
    </div>
  );
};

export default HomePage;
