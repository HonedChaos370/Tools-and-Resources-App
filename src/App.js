import React, { Component } from "react";
import Title from "./Title";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Title>Tools and Resources App</Title>
        <Home />
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  }
};
