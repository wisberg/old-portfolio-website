import React, { Component } from 'react'
import { Form, FormGroup, Input, Alert } from 'reactstrap';
import emailjs from 'emailjs-com';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export class Contact extends Component {
    state = {
        name: '', 
        email: '', 
        subject: '',
        message: ''
    }

    handleSubmit = e => {
        emailjs.sendForm('example', 'example', e.target, 
            'example')
      .then((result) => {
          console.log(result.text);
          document.getElementById('successAlert').style.display = '';
          
      }, (error) => {
          console.log(error.text);
          document.getElementById('dangerAlert').style.display = '';
      });
        
        e.preventDefault();

        this.setState({
            name: '', 
            email: '', 
            message: '',
            subject: ''
        })
      };
  
    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      return (
        <div className = "contactPage">
                <div id = "social-buttons">
                <h2>LET'S CONNECT!</h2>
                <div id = "contact"></div>
                
                    <a href="https://ca.linkedin.com/in/duff-isberg-39a712106" target = "_blank" rel="noreferrer" class="fab fa-linkedin"> </a>
                    <a href="https://twitter.com/duffisberg" target = "_blank" rel="noreferrer" class="fab fa-twitter"> </a>
                    <a href="https://github.com/wisberg" target = "_blank" rel="noreferrer" class="fab fa-github"> </a>
                    <a href="https://codepen.io/wisberg" target = "_blank" rel="noreferrer" class="fab fa-codepen"> </a>
                </div>
                <div id = "email-me">
                    <h2>SEND A MESSAGE :</h2>
                    <Alert id = "dangerAlert" color="danger" style = {{display: 'none', maxWidth: '350px'}}>Message failed to send. Please try again.</Alert>
                    <Alert id = "successAlert" color="success" style = {{display: 'none', maxWidth: '350px'}}>Thank you very much for your message. I'll get back to you shortly. Duff</Alert>
                    <form name = "contact" onSubmit = {this.handleSubmit} className = "contactForm">
                        <input type="hidden" name="form-name" value="contact" />
                        <FormGroup>
                        <Input type="name" name="name" id="formName" placeholder="Your name" onChange = {this.handleChange} value = {this.state.name} required />
                        </FormGroup>
                        <FormGroup>
                        <Input type="email" name="email" id="formEmail" placeholder="Your email" onChange = {this.handleChange} value = {this.state.email} required />
                        </FormGroup>
                        <FormGroup>
                        <Input type="textarea" name="subject" id="formText" placeholder="Subject (optional)" onChange = {this.handleChange} value = {this.state.subject} />
                        </FormGroup>
                        <FormGroup>
                        <Input type="textarea" name="message" id="formText" placeholder="Message..." onChange = {this.handleChange} value = {this.state.message} required />
                        </FormGroup>
                        <button type = "submit" id = "paperPlane" class = "fas fa-paper-plane"> </button>
                    </form>
                    
                </div>
          </div>
        )
    }
}

export default Contact
