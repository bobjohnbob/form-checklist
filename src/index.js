import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";

import App from "./components/App.js";
import reducers from "./reducers/";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
	combineReducers({
	...reducers,
    form: formReducer
  })
);

/* global document */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
