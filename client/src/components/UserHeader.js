import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

function mapStateToProps(state) {
  return { user: state.auth.user };
}

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <div>Streamer</div>;
    }
    return (
      <div>
        <Image
          src={user.imageUrl}
          avatar
          spaced="right"
          verticalAlign="middle"
        />
        <span>{user.name}</span>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserHeader);
