import React, { Component } from "react";

export default class Desc extends Component {
  render() {
    return (
      <p style={styles.info}>
        Welcome! This webpage is meant to serve as a growing collection of tools
        and resources useful to anyone in math, computer science, and business.
        <br />
        Use the menu below to.
      </p>
    );
  }
}

const styles = {
  info: {
    color: "black",
    textAlign: "center"
  }
};
