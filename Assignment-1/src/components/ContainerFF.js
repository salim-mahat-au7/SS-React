import React, { Component } from "react";
import Social from "./Social";

export default class ContainerFF extends Component {
  render() {
    return (
      <>
        <div className="card-footer">
          <Social />
        </div>
      </>
    );
  }
}
