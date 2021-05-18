import React, { Component } from "react";
import { Media, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

import tableauProject from "./assets/TableauProject.png";
import juicebox from "./assets/Juicebox.png";
import stelmar from "./assets/LOGO.png";
import duffChat from "./assets/duffChat.png";

export class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <Row>
          <Col>
            <Card className="projectCard">
              <Media className="projectImage" src={duffChat} />
              <CardTitle tag="h5">Twitter Clone</CardTitle>
              <CardText>
                Developed a Twitter clone using a React frontend and
                MongoDB/GraphQL/Node.js backend. Deployed frontend to Netlify
                and the backend to Heroku. Currently developing more
                functionality & upgrading the aesthetic of the app.
              </CardText>
              <Button
                href="https://peaceful-golick-950a24.netlify.app/"
                target="_blank"
                className="projectButton"
              >
                CHECK OUT THE APP
              </Button>
            </Card>
          </Col>
        </Row>
        <hr className="projectBreak"></hr>
        <Row>
          <Col>
            <Card className="projectCard">
              <Media className="projectImage" src={stelmar} />
              <CardTitle tag="h5">STEL+MAR WINE</CardTitle>
              <CardText>
                Currently designing and building a website for a wine company
                called Stel & Mar. Had to transfer hosting and a website backup
                they already had, and to set up company emails, SSL etc. Decided
                to use Wordpress for ease of use and since they had no complex
                functionality in the website.
              </CardText>
              <Button
                href="https://stelandmar.com"
                target="_blank"
                className="projectButton"
              >
                GO TO WEBSITE
              </Button>
            </Card>
          </Col>
        </Row>
        <hr className="projectBreak"></hr>
        <Row>
          <Col>
            <Card className="projectCard">
              <Media className="projectImage" src={juicebox} />
              <CardTitle tag="h5">Juicebox Beer</CardTitle>
              <CardText>
                Designing and building a website called Juicebox Beer for a
                client. Set up hosting, emails, SSL, domain etc. for the
                company.
              </CardText>
              <Button
                href="https://juiceboxbeer.com"
                target="_blank"
                className="projectButton"
              >
                GO TO WEBSITE
              </Button>
            </Card>
          </Col>
        </Row>
        <hr className="projectBreak"></hr>
        <Row>
          <Col>
            <Card className="projectCard">
              <Media className="projectImage" src={tableauProject} />
              <CardTitle tag="h5">Tableau Data Analytics Project</CardTitle>
              <CardText>
                Project analyzing police killings in the United States with R
                and Tableau
              </CardText>
              <Button href="/tableau" className="projectButton">
                GO TO PROJECT
              </Button>
            </Card>
          </Col>
        </Row>
        <hr className="projectBreak"></hr>
        <Row>
          <Col>
            <Button
              id="githubButton"
              href="https://github.com/wisberg"
              target="_blank"
              className="projectButton"
            >
              SEE MORE PROJECTS ON GITHUB
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
