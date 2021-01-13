import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Header />
					</Route>
					<Route path="/">
						<Header />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
