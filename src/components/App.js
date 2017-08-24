/* @flow */
import React from 'react';
import Form from "./Form.js";

const App = ({onSubmit, message}) => {
	return (
		<div className="App">
			<div className="App-header">
				<h2>This is my model form...</h2>
			</div>
			<div className="App-intro">
				<Form onSubmit={onSubmit} />
				<div className="Submittion">
					{message}
				</div>
			</div>
		</div>
	);
};

export default App;
