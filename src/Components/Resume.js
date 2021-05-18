import React, { Component } from 'react';
import resume from './assets/Duff_Resume_Final.pdf';

export class Resume extends Component {
    render() {
        return (
            <div>
                <iframe title = "Resume" src={resume} style={{width:'100%', height:'100vh', border:'none'}}></iframe>
            </div>
        )
    }
}

export default Resume
