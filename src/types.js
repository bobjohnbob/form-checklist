/* @flow */

export type UpdateMessage = {
	type: "UPDATE_MESSAGE",
	message: string
};

export type Action = UpdateMessage;

export type Dispatchable = action:Action;

export type Dispatch = (Dispatchable) => Promise;

export type State = {
	message:string
}

