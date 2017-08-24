/* @flow */
import type { UpdateMessage } from "./types.js";

const creator = (message: string): UpdateMessage => {
  return {
    type: "UPDATE_MESSAGE",
    message: message
  }
};

export default creator;
