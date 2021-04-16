import React from "react";
import { CityContainer } from "components/typography";
import { CITY } from "constants/city";
import { MarkMap } from "components/icons";

export const City = () => {
	return (
		<CityContainer>
			<MarkMap />
			{CITY.Ulyanovsk}
		</CityContainer>
	);
};
