import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "pages/home/HomePage";
import { OrderPage } from "pages/orderPage/OrderPage";
import { MyOrderPage } from "pages/orderPage/MyOrderPage";
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
			<Route exact path={PATH.orderById}>
				<MyOrderPage />
			</Route>
		</Switch>
	</Router>
);
