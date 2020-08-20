import React, { Component } from "react";
import Title from "./Title";
import Econtent from "./Econtent";

export default class EducationDetails extends Component {
  render() {
    return (
      <>
        <Title titleText="EDUCATION" />
        <div>
          <Econtent
            cYear="2015-2018"
            cCollege="DKTE'S Textile And Engg. Institute, Ichalkaranji."
            cDegree="BE Electronics Engineering"
            cMark="Percentage: 63%"
          />
          <Econtent
            cYear="2012-2015"
            cCollege="New Polytechnic."
            cDegree="Diploma in Industrial Electronics"
            cMark="Percentage: 71%"
          />
        </div>
      </>
    );
  }
}
