import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";

import AppComponent from "./components/App.js";
import reducers from "./reducers/";
import registerServiceWorker from "./registerServiceWorker";
import LocalForm from "./containers/LocalForm.js";
const App = LocalForm(AppComponent);

const store = createStore(
	combineReducers({
	...reducers,
    form: formReducer
  })
);

/* global document window*/
window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
