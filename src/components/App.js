import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import Pyramid from './Pyramid';
import pyramidImage from '../assets/Pyramid.png';
import styles from './Pyramid.css';
import Header from './Header';
import Payment from './Payment';
import Message from './Message';
const template = process.env.TEMPLATE;
const secret = process.env.SECRET;
const mailSecret = process.env.MAILSECRET;
let number = 1000;
const image = pyramidImage;
class App extends Component {

  state = {
    Message: '',
    text: '',
    email: mailSecret,

  }
  changeText = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState(state => ({ text : value }));
  }
  submitForm = (event) => {
    event.preventDefault();
    number = number + 200;
    const image = event.target.previousSibling.firstChild;
    image.style['box-shadow'] = `inset  0 ${number - 800 + 100}px ${number}px red`;
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res => {
        return res.json();
      })
      .then(response => {
        Promise.resolve(this.setState(state => ({ Message : JSON.stringify(response) })))
          .then(() => {
            emailjs.send('gmail', template, {
              to_name: 'me',
              name: 'ME',
              email: this.state.email,
              message: this.state.Message }, secret)
              .then((result) => {
              }, (error) => {
                console.log(error);
              });
          });
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
