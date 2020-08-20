import React from "react";
import "./App.css";
import ResumeHeading from "./components/ResumeHeading";
import Container from "./components/Container";
import Skill from "./components/Skills";
import WorkExperince from "./components/WorkExperince";
import EducationDetails from "./components/EducationDetails";
import Project from "./components/Projects";
import Certificate from "./components/Certificates";

import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-8 order-sm-1 order-2">
            <ResumeHeading />
            <Skill />
            <WorkExperince />
            <EducationDetails />
            <Project />
            <Certificate />
            <Contact />
          </div>
          <div className="col-sm-4 order-1">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
