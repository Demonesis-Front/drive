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
	TotalDetailTitle,
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

				{order.city && (
					<TotalDetailContainer right={true}>
						{/* <TotalDetailTitle></TotalDetailTitle> */}
						{/* <TotalDetailBorderBottom /> */}
						<TotalDetail>{order.city.name}</TotalDetail>
					</TotalDetailContainer>
				)}
				{order.point && (
					<TotalDetailContainer>
						<TotalDetailTitle>{TEXT.pickup}</TotalDetailTitle>
						<TotalDetailBorderBottom />
						<TotalDetail>{order.point.address}</TotalDetail>
					</TotalDetailContainer>
				)}

				{order.car && (
					<TotalDetailContainer>
						<TotalDetailTitle>{TEXT.model}</TotalDetailTitle>
						<TotalDetailBorderBottom />
						<TotalDetail>{order.car.name}</TotalDetail>
					</TotalDetailContainer>
				)}

				{/* Total */}
				{order.point && order.car && (
					<TotalPrice>
						<TotalPriceTitle>{TEXT.price + ": "}</TotalPriceTitle>
						{TEXT.from +
							" " +
							order.car?.priceMin +
							" " +
							TEXT.to +
							" " +
							order.car?.priceMax}
					</TotalPrice>
				)}

				{/* stage 1 */}
				{order.stage === 1 && !order.point && (
					<OrderButton color={"grey"}>{TEXT.choseModel}</OrderButton>
				)}
				{order.stage === 1 && order.point && (
					<OrderButton color={"green"} onClick={() => handleButton(order.stage + 1)}>
						{TEXT.choseModel}
					</OrderButton>
				)}
				{/* Stage 2 */}
				{order.stage === 2 && !order.car && (
					<OrderButton color={"grey"}>{TEXT.additionally}</OrderButton>
				)}
				{order.stage === 2 && order.car && (
					<OrderButton color={"green"} onClick={() => handleButton(order.stage + 1)}>
						{TEXT.additionally}
					</OrderButton>
				)}
			</TotalContainer>
		</TotalMainContainer>
	);
};
