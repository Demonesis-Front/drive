import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "pages/home/HomePage";
import { OrderPage } from "pages/orderPage/OrderPage";
import { TestPage } from "pages/test/TestPage";
import { PATH } from "./path";

export const Navigation = () => (
	<Router>
		<Switch>
			<Route exact path={PATH.home}>
				<HomePage />
			</Route>
			<Route exact path={PATH.order}>
				<OrderPage />
			</Route>
			<Route exact path={"/test"}>
				<TestPage />
			</Route>
		</Switch>
	</Router>
);
