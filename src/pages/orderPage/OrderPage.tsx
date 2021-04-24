import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "store/order/reducer";
import {
	OrderPageContainer,
	OrderPageContent,
	OrderNavigationContainer,
	OrderNavigationContainerBorder,
} from "components/containers";
import { Header } from "components/Header";
import { Stages } from "./stages/Stages";
import { MapStage } from "pages/orderPage/mapStage/MapStage";
import { ModelStage } from "pages/orderPage/modalStage/ModelStage";
import { AdditionallyStage } from "pages/orderPage/additionallyStage/AdditionallyStage";
import { StageContentContainer } from "components/containers";
import { Total } from "pages/orderPage/total/Total";
import { TotalMobile } from "pages/orderPage/total/TotalMobile";
import { getOrder } from "store/order/selectors";

export const OrderPage = () => {
	const order = useSelector(getOrder);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(orderActions.init());
	}, [dispatch]);

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
					<TotalMobile />
				</StageContentContainer>
			</OrderPageContent>
		</OrderPageContainer>
	);
};
