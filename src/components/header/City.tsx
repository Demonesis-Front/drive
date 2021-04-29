import React from "react";
import { CityContainer } from "./styled";
import { MarkMap } from "common/icons";
import { useSelector } from "react-redux";
import { getOrder } from "store/order/selectors";

export const City = () => {
	const order = useSelector(getOrder);

	if (order.city?.name) {
		return (
			<CityContainer>
				<MarkMap />
				{order.city?.name}
			</CityContainer>
		);
	}
	return null;
};
