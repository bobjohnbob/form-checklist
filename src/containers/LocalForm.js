/* @flow */
import {connect} from "react-redux";
import type {Dispatch, State} from "../types.js";
import updateMessageCreator from "../actions/updateMessage.js";

const mapStateToProps = ({message}:State):{} => {
	return {
		message
	}
};

const mapDispatchToProps = (dispatch:Dispatch):{} => {
	return {
		onSubmit: (data) => {
			dispatch(updateMessageCreator(data.message));
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
);

