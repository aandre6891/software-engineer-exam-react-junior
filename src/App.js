import React from 'react';
import './App.css';
import New from './components/New';

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
						<div key={field.name}>
							<label htmlFor={field.name}>{field.label}</label>
							<input id={field.name} type={field.type}></input>
						</div>
					))}
				</form>
				<New text="hello" />
			</div>

		);
	}
}

export default App;
