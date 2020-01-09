import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Button, Modal } from "semantic-ui-react";
import history from "../../history";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <Button negative onClick={() => this.props.deleteStream(id)}>
          Delete
        </Button>
        <Button primary onClick={() => history.push("/")}>
          Cancel
        </Button>
      </React.Fragment>
    );
  };

  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`;
  };

  render() {
    return (
      <Modal size="tiny" defaultOpen={true}>
        <Modal.Header>Delete Stream</Modal.Header>
        <Modal.Content>
          <p>{this.renderContent()}</p>
        </Modal.Content>
        <Modal.Actions>{this.renderActions()}</Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream
})(StreamDelete);
