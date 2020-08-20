import React, { Component } from "react";
import Title from "./Title";
import Pcontent from "./Pcontent";

export default class Project extends Component {
  render() {
    return (
      <>
        <Title titleText="PROJECTS" />
        <Pcontent
          cProjectName="HI-DOC"
          cProjectDesc="An application build in Node.js, Express.js and MongoDB and Postgres. Its online doctor booking appointment system. It has login and signup functionality. User can create, read, update and delete Appointments. "
          cProjectLink="https://hi-doc.herokuapp.com/"
        />
        <Pcontent
          cProjectName="Junk File Organizer"
          cProjectDesc="A desktop application built using Application. It will be clean all junk file in system"
          cProjectLink="https://github.com/"
        />
        <Pcontent
          cProjectName="Vehicle Tracking System"
          cProjectDesc="Its a Vehical tracking system using arduino. "
          cProjectLink="https://github.com/"
        />
      </>
    );
  }
}
