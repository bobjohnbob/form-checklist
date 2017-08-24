/* @flow */
import React from "react";
import PropTypes from 'prop-types';
import { Field, reduxForm } from "redux-form";

type Props = {
	handleSubmit: (e: SyntheticEvent) => boolean
};

const ModelForm = ({handleSubmit}: Props, test: string) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Message</label>
        <Field name="message" component="input" type="text" />
			</div>
			<button type="submit">Submit</button>
		</form>
  );
};

ModelForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const ModelFormComponent = reduxForm({
  form: "model"
})(ModelForm);

export default ModelFormComponent;
