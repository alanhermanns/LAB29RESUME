import React from 'react';
import styles from './Pyramid.css';

const Pyramid = ({ image }) => {
  return (
    <div className='Pyramid'>
      <img src={image}></img>
    </div>
  );
};
export default Pyramid;
