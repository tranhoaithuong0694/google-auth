import React, { Component } from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Icon, List } from "semantic-ui-react";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = stream => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <List.Content floated="right">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </List.Content>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <List.Item key={stream.id}>
          {this.renderAdmin(stream)}
          <Icon name="camera" size="large" />
          <List.Content>
            <List.Header>
              <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
            </List.Header>
            {stream.description}
          </List.Content>
        </List.Item>
      );
    });
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new">
            <Button primary>Create Stream</Button>
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Header as="h2">Streams</Header>
        <List divided celled>
          {this.renderList()}
        </List>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.user ? state.auth.user.userId : null,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
