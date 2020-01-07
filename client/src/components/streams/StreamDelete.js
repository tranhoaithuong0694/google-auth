import React, { Component } from "react";

class StreamDelete extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
  }

  render() {
    return <div>Stream Delete</div>;
  }
}

export default StreamDelete;
