import React, { Component } from "react";
import { Button, Form, Input, Label } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <Label pointing prompt>
          {error}
        </Label>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <Input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <Button primary>Submit</Button>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
