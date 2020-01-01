import React, { Component } from "react";

export default class Title extends Component {
  render() {
    const { children } = this.props;

    return (
      <div style={styles.header}>
        <div style={styles.title}>{children}</div>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: "#80bbff",
    padding: 15
  },
  title: {
    textAlign: "center",
    color: "black"
  }
};