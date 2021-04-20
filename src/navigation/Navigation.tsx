import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { OrderPage } from "pages/OrderPage";
import { PATH } from "./path";

export const Navigation = () => (
	<Router>
		<Switch>
			<Route exact path={PATH.drive}>
				<HomePage />
			</Route>
			<Route exact path={PATH.order}>
				<OrderPage />
			</Route>
		</Switch>
	</Router>
);
