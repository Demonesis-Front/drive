import React from "react";
import { CityContainer } from "components/typography";
import { CITY } from "constants/city";
import { MarkMap } from "components/icons";
import { useSelector } from "react-redux";
import { getOrder } from "store/order/selectors";

export const City = () => {
	const order = useSelector(getOrder);

	return (
		<CityContainer>
			<MarkMap />
			{order.city?.name ? order.city?.name : CITY.Ulyanovsk}
		</CityContainer>
	);
};
