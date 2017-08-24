/* @flow */
import type {Action} from "../types.js";

const message = (state:string = "", action:Action):string => {
	switch(action.type) {
		case "UPDATE_MESSAGE":
			return action.message;
		default:
			return state;
	}
};

export default message;



