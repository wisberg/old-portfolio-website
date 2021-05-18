import React, { Component } from 'react'
import AppNavbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import MainPage from './MainPage';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


export class singlePage extends Component {
    
    render() {
        window.onscroll = function() {
                  
            if(window.pageYOffset >= 650){
            document.getElementsByClassName("navBar")[0].style.backgroundColor = "var(--footer)";
            document.getElementsByClassName("navBar")[0].style.height = "50px";
            document.getElementsByClassName("navBar")[0].style.opacity = "0.9";
            document.getElementsByClassName("navBar")[0].style.transition = "1s";
            document.getElementsByClassName("navLink")[0].style.backgroundColor = "green !important"
            }
            else if(window.pageYOffset < 652){
            document.getElementsByClassName("navBar")[0].style.backgroundColor = "transparent";
            document.getElementsByClassName("navBar")[0].style.height = "80px";
            document.getElementsByClassName("navBar")[0].style.opacity = "1";
            document.getElementsByClassName("navBar")[0].style.transition = "1s";
            }
            
        }

        return (
            <div>
                <AppNavbar />
                <MainPage />
                <Projects id = "#projects" />
                <About id = "#about" />
                <Contact />
                <Footer id = "#contact" />
            </div>
        )
    }
}

export default singlePage
