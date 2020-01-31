import React, { Component } from 'react';
import Pyramid from './Pyramid';
import pyramidImage from '../assets/Pyramid.png';
import styles from './Pyramid.css';
import Header from './Header';
import Payment from './Payment';
import Message from './Message';

const image = pyramidImage;
class App extends Component {

  state = {
    Message: '',
    text: ''
  }
  changeText = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState(state => ({ text : value }));
  }
  submitForm = (event) => {
    event.preventDefault();
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res => {
        return res.json();
      })
      .then(response => {
        this.setState(state => ({ Message : JSON.stringify(response) }));
      });
  }

  render(){
    return <>
      <Header />
      <Pyramid image={image} />
      <Payment onChange={this.changeText} onSubmit={this.submitForm}/>
      <Message text={this.state.Message}/>
    </>;
  }
}

export default App;
