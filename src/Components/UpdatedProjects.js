import React from "react";
import { Button } from "reactstrap";

import "../CSS/UpdatedProjects.css";
import "../CSS/Project.css";

import Logo from "./assets/LOGO.png";
import duffChat from "./assets/duffChat.png";
import juiceBox from "./assets/Juicebox.png";
import tableau from "./assets/TableauProject.png";

export default function UpdatedProjects() {
  return (
    <div className="updatedProjects">
      <div className="project">
        <img src={Logo} alt="stel+mar logo" className="projectImage1" />
        <p className="projectParagraph">
          Currently designing and building a website for a wine company called
          Stel & Mar. Transfered the website host with a site backup they
          already had, and to set up company emails, SSL, etc. Decided to use
          Wordpress for ease of use and since they had no complex functionality
          in the website.{" "}
        </p>
        <Button
          className="projectButton"
          href="https://stelandmar.com/"
          target="_blank"
        >
          See website
        </Button>
      </div>
      <div className="divider"></div>
      <div className="project">
        <img src={duffChat} alt="duffchat logo" className="projectImage1" />
        <p className="projectParagraph">
          Developed a Twitter clone using a React frontend and a MongoDB/
          GraphQL/Node.js backend. Deployed frontend to Netlify and the backend
          to Heroku. Continuing to develop more functionality & features for the
          app.
        </p>
        <Button
          href="https://peaceful-golick-950a24.netlify.app/"
          target="_blank"
          className="projectButton"
        >
          See app
        </Button>
      </div>
      <div className="divider"></div>
      <div className="project">
        <img src={juiceBox} alt="duffchat logo" className="projectImage1" />
        <p className="projectParagraph">
          Currently designing and building a website called Juicebox Beer for a
          client. Set up hosting, emails, SSL, etc. for the company.
        </p>
        <Button
          href="https://juiceboxbeer.com/"
          target="_blank"
          className="projectButton"
        >
          See Website
        </Button>
      </div>
      <div className="divider"></div>
      <div className="project">
        <img src={tableau} alt="duffchat logo" className="projectImage1" />
        <p className="projectParagraph">
          Data science project analyzing police killings in the United States
          with R and Tableau
        </p>
        <Button className="projectButton" href="/tableau">
          See Project
        </Button>
      </div>
    </div>
  );
}
