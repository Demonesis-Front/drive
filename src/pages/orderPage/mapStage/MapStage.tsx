import React from "react";
import { useSelector } from "react-redux";
import { getOrderStatus } from "store/order/selectors";
import { CityAndPickUp } from "./CityAndPickUp";
import { MapComponent } from "./MapComponent";
import { StageContainer } from "components/containers";
import { MapBox, CircularContainer } from "./styled";
import CircularProgress from "@material-ui/core/CircularProgress";

export const MapStage = () => {
	const orderStatus = useSelector(getOrderStatus);

	if (orderStatus) {
		return (
			<CircularContainer>
				<CircularProgress />
			</CircularContainer>
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
