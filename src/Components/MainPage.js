import React, { Component } from 'react';
import Toronto from './assets/Toronto-Skyline.jpg';


export class MainPage extends Component {
    render() {
        return (
          <div className = "mainPage">
          <img className = "overlayPicture" src = {Toronto} alt = "Overlay of trees" />
            <div className = "textTotal">
                <h1 className = "welcomeText">DUFF ISBERG</h1>
                <h5 className = "welcomeText">Toronto based Junior Developer with experience in both Front End and Back End development using the MERN stack. </h5>  
          </div>
          <a id = "firstButton" href = "#projects">See Work</a>
          </div>
   
        )
    }
}

export default MainPage
