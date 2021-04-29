import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "store/order/reducer";
import { getOrder } from "store/order/selectors";
import {
	OrderPageContainer,
	OrderPageContent,
	OrderNavigationContainer,
	OrderNavigationContainerBorder,
	StageContentContainer,
} from "./styled";
import { Header } from "components/header/Header";
import { Stages } from "./stages/Stages";
import { MapStage } from "pages/orderPage/mapStage/MapStage";
import { ModelStage } from "pages/orderPage/modelStage/ModelStage";
import { AdditionallyStage } from "pages/orderPage/additionallyStage/AdditionallyStage";
import { TotalStage } from "pages/orderPage/totalStage/TotalStage";
import { Total } from "pages/orderPage/total/Total";
import { TotalMobileButton } from "./total/styled";
import { TEXT } from "constants/text";
// import { TotalMobile } from "pages/orderPage/total/TotalMobile";

export const OrderPage = () => {
	const [showTotalOrder, setShowTotalOrder] = useState<boolean>(false);
	const order = useSelector(getOrder);
	const dispatch = useDispatch();

	const showTotalOrderHandler = () => setShowTotalOrder(!showTotalOrder);

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
					{order.stage === 4 && <TotalStage />}

					<Total active={showTotalOrder} />
					{/* <TotalMobile /> */}
					<TotalMobileButton onClick={showTotalOrderHandler}>
						{TEXT.order}
					</TotalMobileButton>
				</StageContentContainer>
			</OrderPageContent>
		</OrderPageContainer>
	);
};
