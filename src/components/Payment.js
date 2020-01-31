import React from 'react';
import styles from './Payment.css';

const Payment = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <button type='submit'>Go</button>
      <input type='text' onChange={onChange}></input>
    </form>
  );
}
;

export default Payment;
