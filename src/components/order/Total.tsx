import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "store/order/selectors";
import { orderActions } from "store/order/reducer";
import {
	TotalContainer,
	TotalDetailContainer,
	TotalMainContainer,
} from "components/containers";
import {
	TotalTitle,
	TotalDetail,
	TotalDetailBorderBottom,
	TotalPrice,
	TotalPriceTitle,
} from "components/typography";
import { OrderButton } from "components/buttons/buttons";
import { TEXT } from "constants/text";

export const Total = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);

	const handleButton = (stage: number) => {
		dispatch(orderActions.setStage(stage));
	};

	return (
		<TotalMainContainer>
			<TotalContainer>
				<TotalTitle>{TEXT.totalTitle + ":"}</TotalTitle>

				{order.pickup && (
					<TotalDetailContainer>
						<TotalDetail>{TEXT.pickup}</TotalDetail>
						<TotalDetailBorderBottom />
						<TotalDetail>{order.pickup.title}</TotalDetail>
					</TotalDetailContainer>
				)}

				{order.pickup && (
					<TotalPrice>
						<TotalPriceTitle>{TEXT.price + ": "}</TotalPriceTitle>От 1200 до 2300
					</TotalPrice>
				)}

				{/* stage 1 */}
				{order.stage === 1 && !order.pickup && (
					<OrderButton color={"grey"}>{TEXT.choseModel}</OrderButton>
				)}
				{order.stage === 1 && order.pickup && (
					<OrderButton color={"green"} onClick={() => handleButton(order.stage + 1)}>
						{TEXT.choseModel}
					</OrderButton>
				)}
			</TotalContainer>
		</TotalMainContainer>
	);
};
