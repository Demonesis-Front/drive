import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "store/order/reducer";
import { getOrder, getOrderStatus } from "store/order/selectors";
import { CityAndPickUp } from "./CityAndPickUp";
import { MapComponent } from "./MapComponent";
import { StageContainer } from "./../styled";
import { MapBox } from "./styled";
import { CircularLoader } from "components/loader/CircularLoader";

export const MapStage = () => {
	const orderStatus = useSelector(getOrderStatus);
	const order = useSelector(getOrder);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!order.cities && !order.points) {
			dispatch(orderActions.initMap());
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (orderStatus) {
		return (
			<StageContainer>
				<CircularLoader />
			</StageContainer>
		);
	}

	return (
		<StageContainer>
			<CityAndPickUp />
			<MapComponent />
			<MapBox />
		</StageContainer>
	);
};
