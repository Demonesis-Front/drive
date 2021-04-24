import React from "react";
import { CityAndPickUp } from "./CityAndPickUp";
import { MapComponent } from "./MapComponent";
import { StageContainer } from "components/containers";
import { MapBox } from "./styled";

export const MapStage = () => {
	return (
		<StageContainer>
			<CityAndPickUp />
			<MapComponent />
			<MapBox />
		</StageContainer>
	);
};
