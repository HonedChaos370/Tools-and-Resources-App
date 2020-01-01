import React, { Component } from "react";
import Desc from "./Desc";
import Resources from "./Resources";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Desc />
        <Resources />
      </div>
    );
  }
}

const styles = {};
