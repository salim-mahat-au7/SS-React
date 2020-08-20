import React, { Component } from "react";
import ProImg from "../images/profile.jpg";

export default class Containerimg extends Component {
  render() {
    return (
      <>
        <img className="card-image-top" src={ProImg} alt="profile image" />
      </>
    );
  }
}
