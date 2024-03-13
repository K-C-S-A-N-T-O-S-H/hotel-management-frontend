import React from "react";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const User = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
};

export default User;
