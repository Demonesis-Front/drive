import React from "react";
import { useSelector } from "react-redux";
import {
	OrderPageContainer,
	OrderPageContent,
	OrderNavigationContainer,
	OrderNavigationContainerBorder,
} from "components/containers";

// import { TEXT } from "constants/text";
import { Header } from "components/Header";
// import { PATH } from "navigation/path";
import { Stages } from "components/order/Stages";
import { MapStage } from "components/order/MapStage";
import { ModelStage } from "components/order/ModelStage";
import { AdditionallyStage } from "components/order/AdditionallyStage";
import { StageContentContainer } from "components/containers";
import { Total } from "components/order/Total";
import { getOrder } from "store/order/selectors";

export const OrderPage = () => {
	const order = useSelector(getOrder);
	console.log(order.stage);

	return (
		<OrderPageContainer>
			<OrderPageContent>
				<Header />
				<OrderNavigationContainer>
					<Stages />
					<OrderNavigationContainerBorder />
				</OrderNavigationContainer>
				<StageContentContainer>
					{order.stage === 1 && <MapStage />}
					{order.stage === 2 && <ModelStage />}
					{order.stage === 3 && <AdditionallyStage />}

					<Total />
				</StageContentContainer>
			</OrderPageContent>
		</OrderPageContainer>
	);
};
