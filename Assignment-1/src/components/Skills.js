import React, { Component } from "react";
import Title from "./Title";
import Scontent from "./Scontent";

export default class Skill extends Component {
  render() {
    return (
      <>
        <div>
          <Title titleText="SKILLS" />
          <Scontent
            cSkill="Language"
            cDesc="Python, Javascript, C, Node.js, Java."
          />
          <Scontent cSkill="Database" cDesc="MongoDB, Postgres, MySQL." />
          <Scontent
            cSkill="Web Technology"
            cDesc="HTML, CSS, React.js, Bootstrap4, Node.js, Express.js, Mongoose, Sequalize."
          />
          <Scontent
            cSkill="Tools"
            cDesc="VS Code, MongoDB, Compass, ElephantSql, MySQL Workbench."
          />
        </div>
      </>
    );
  }
}
