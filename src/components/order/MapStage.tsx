import React from "react";
import { CityAndPickUp } from "./inputs/CityAndPickUp";
import { MapComponent } from "./MapComponent";
import { StageContainer } from "components/containers";

export const MapStage = () => {
	return (
		<StageContainer>
			<CityAndPickUp />
			<MapComponent />
		</StageContainer>
	);
};
