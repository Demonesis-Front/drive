import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myOrderActions } from "store/myOrder/reducer";
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
import { getMyOrder } from "store/myOrder/selectors";

export const MyOrderPage = () => {
	const [showTotalOrder, setShowTotalOrder] = useState<boolean>(false);
	const myOrder = useSelector(getMyOrder);
	const dispatch = useDispatch();

	const showTotalOrderHandler = () => setShowTotalOrder(!showTotalOrder);

	useEffect(() => {
		dispatch(myOrderActions.getMyOrder());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<OrderPageContainer>
			<OrderPageContent>
				<Header />
				<OrderNavigationContainer>
					<MyOrderNumber>{TEXT.orderNumber + " " + myOrder.id}</MyOrderNumber>
					<OrderNavigationContainerBorder />
				</OrderNavigationContainer>
				<StageContentContainer>
					<TotalStage>
						{myOrder.orderStatusId?.id === "5e26a191099b810b946c5d89" && (
							<MyOrderStatus>{TEXT.orderStatus.new}</MyOrderStatus>
						)}
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
