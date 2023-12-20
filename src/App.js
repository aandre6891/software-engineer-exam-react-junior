import React from 'react';
import './App.css';

const fields = [
	{ name: "field_name", label: "Name", type: "text" },
	{ name: "field_username", label: "User", type: "text" },
	{ name: "field_date", label: "Date", type: "date" }
];

class App extends React.Component {

	render() {

		return (

			<div>
				<h1>Webtrends Optimize Software Engineer exam</h1>
				<form>
					{fields.map(field => (
						<>
							<label htmlFor={field.name}>{field.label}</label>
							<input id={field.name} type={field.type}></input>
						</>
					))}
				</form>
			</div>

		);
	}
}

export default App;
