import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { Button, Icon } from "semantic-ui-react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "37063206651-hnok1uqembjlup3s2fo2hre18hmjkvk8.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      const currentUserProfile = this.auth.currentUser.get().getBasicProfile();
      const currentUser = {
        userId: currentUserProfile.getId(),
        name: currentUserProfile.getName(),
        email: currentUserProfile.getEmail(),
        imageUrl: currentUserProfile.getImageUrl()
      };
      this.props.signIn(currentUser);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <Button onClick={this.onSignOutClick} inverted>
          <Icon name="google" />
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button onClick={this.onSignInClick} inverted>
          <Icon name="google" />
          Sign In
        </Button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
