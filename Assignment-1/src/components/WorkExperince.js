import React, { Component } from "react";
import Title from "./Title";
import Wcontent from "./Wcontent";

export default class WorkExperince extends Component {
  render() {
    return (
      <>
        <Title titleText="WORK EXPERIENCE" />
        <div>
          <Wcontent
            cTitle="August 2020 - Present"
            cPosition="React Redux Trainee"
            cCompany="SKILLSANTA"
            cWorkdesc="Learning React Redux technology"
          />
          <Wcontent
            cTitle="jan 2020 - Present"
            cPosition="Full Stack Developer Intern"
            cCompany="E-learning"
            cWorkdesc="Built REST APIs for E-learning platform in Node.js, Express.js and MongoDB."
          />
        </div>
      </>
    );
  }
}
