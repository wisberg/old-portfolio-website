import React, { Component } from 'react';
import DuffHeadshot from './assets/Duff_Headshot_2.png';
import collage from './assets/Collage.png';
import '../../src/About.css';



export class About extends Component {

    render() {
            
        return (
            <div className = "aboutPage" id = "about">
                
                <div className = "aboutSection">
                <div className = "pictureAndBox">
                <img className = "aboutPicture" src = {DuffHeadshot} alt = "Duff's Headshot" />
                <div className = "skillBox">
                <i class="fab fa-html5 fa-5x techIcons"></i>
                <i class="fab fa-css3-alt fa-5x techIcons"></i>
                <i class="fab fa-node-js fa-5x techIcons"></i>
                <i class="fab fa-node fa-5x techIcons"></i>
                <i class="fab fa-react fa-5x techIcons"></i>
                </div>
                </div>
                    <div className = "collageSection">
                        <img className = "collage" src = {collage} alt = "Collage of photos for a background" />
                        <div className = "aboutMe">
                            <h1>ABOUT ME</h1>
                            <p>Hi there! My name is Duff Isberg and I'm a Junior Software Developer based in Toronto, Ontario. I love building front-end websites and applications using React. I'm experienced with back-end programming using Express, Redux, MongoDB and Node.js, and more recently have begun using GraphQL for projects.</p>
                            <br></br>
                            <p>My hobbies include Martial Arts, Ski Racing, Tennis and playing the Trumpet. I've also had a passion for Astronomy and Science since I was very young.</p>
                            <br></br>
                            <p>I love all things Tech, and am currently improving my Python knowledge with Tensorflow and OpenCV projects. I have also been working with C# and Unity to create interactive models of things I find interesting like the SpaceX Starship launch.</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About
