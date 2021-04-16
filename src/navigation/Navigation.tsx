import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";

export const Navigation = () => (
	<Router>
		<Switch>
			<Route exact path="/drive">
				<HomePage />
			</Route>
		</Switch>
	</Router>
);
