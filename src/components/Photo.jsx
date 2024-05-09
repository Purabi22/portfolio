import React, { useState } from 'react';
import './Photo.css';

const Photo = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleAnimation = () => {
    setIsAnimated(prevState => !prevState);
  };

  return (
    <section className={`photo-container ${isAnimated ? 'animate' : ''}`} onClick={toggleAnimation}>
      <div className='photo-content'>
        <h2>Hello, I am Purabi Mondal</h2>
        <p>A passionate and dedicated Full Stack Developer specializing in MERN stack development</p>
      </div>
      <div className='dp'>
        <div className='icon'>
          <img src='./images/dp.JPG' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Photo;
