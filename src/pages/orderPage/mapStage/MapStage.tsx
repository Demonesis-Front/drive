import React from "react";
import { useSelector } from "react-redux";
import { getOrderStatus } from "store/order/selectors";
import { CityAndPickUp } from "./CityAndPickUp";
import { MapComponent } from "./MapComponent";
import { StageContainer } from "./../styled";
import { MapBox } from "./styled";
import { CircularLoader } from "components/loader/CircularLoader";

export const MapStage = () => {
	const orderStatus = useSelector(getOrderStatus);

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
