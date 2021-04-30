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
	MyOrderNumber,
	MyOrderStatus,
} from "./styled";
import { Header } from "components/header/Header";
import { TotalStage } from "pages/orderPage/totalStage/TotalStage";
import { Total } from "pages/orderPage/total/Total";
import { MyOrderPageButton } from "./MyOrderPageButton";
import { TotalMobileButton } from "./total/styled";
import { ShoppingCartIcon } from "common/icons";
import { TEXT } from "constants/text";

export const MyOrderPage = () => {
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
					<MyOrderNumber>{TEXT.orderNumber + " " + 123123123}</MyOrderNumber>
					<OrderNavigationContainerBorder />
				</OrderNavigationContainer>
				<StageContentContainer>
					<TotalStage>
						<MyOrderStatus>Ваш заказ подтверждён ;)</MyOrderStatus>
					</TotalStage>

					<Total active={showTotalOrder}>
						<MyOrderPageButton />
					</Total>
					<TotalMobileButton onClick={showTotalOrderHandler}>
						<ShoppingCartIcon />
					</TotalMobileButton>
				</StageContentContainer>
			</OrderPageContent>
		</OrderPageContainer>
	);
};
