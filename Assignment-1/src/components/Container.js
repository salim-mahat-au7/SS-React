import React, { Component } from "react";

import Containerimg from "./Containerimg";
import Containerbody from "./Containerbody";
import ContainerFF from "./ContainerFF";

export default class Container extends Component {
  render() {
    return (
      <>
        <div className="col-sm-4 order-1">
          <div className="d-flex justify-content-center">
            <div style={{ width: "250px" }} className="card">
              <Containerimg />
              <Containerbody />
              <ContainerFF />
            </div>
          </div>
        </div>
      </>
    );
  }
}

{
}
