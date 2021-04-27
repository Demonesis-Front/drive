import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "store/order/selectors";
import { orderActions } from "store/order/reducer";
import {
	TotalDetailContainer,
	TotalMobileMainContainer,
	TotalMobileContainer,
} from "components/containers";
import {
	TotalTitle,
	TotalDetail,
	TotalDetailBorderBottom,
	TotalPrice,
	TotalPriceTitle,
	TotalDetailTitle,
} from "components/typography";
import { TotalMobileButton } from "./styled";
import { OrderMobileButton } from "components/buttons/buttons";
import { TEXT } from "constants/text";

export const TotalMobile = () => {
	const [showOrder, setShowOrder] = useState<boolean>(false);
	const dispatch = useDispatch();
	const order = useSelector(getOrder);

	const handleButton = (stage: number) => {
		dispatch(orderActions.setStage(stage));
	};
	const handlerShowOrder = () => setShowOrder(!showOrder);

	return (
		<TotalMobileMainContainer>
			{showOrder && (
				<TotalMobileContainer>
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
							<TotalDetail>{order.point.name}</TotalDetail>
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
				</TotalMobileContainer>
			)}
			{/* Toggle for Order */}
			<TotalMobileButton onClick={handlerShowOrder}>{TEXT.order}</TotalMobileButton>

			{/* stage 1 */}
			{order.stage === 1 && !order.point && (
				<OrderMobileButton color={"grey"}>{TEXT.choseModel}</OrderMobileButton>
			)}
			{order.stage === 1 && order.point && (
				<OrderMobileButton
					color={"green"}
					onClick={() => handleButton(order.stage + 1)}
				>
					{TEXT.choseModel}
				</OrderMobileButton>
			)}
			{/* Stage 2 */}
			{order.stage === 2 && !order.car && (
				<OrderMobileButton color={"grey"}>{TEXT.additionally}</OrderMobileButton>
			)}
			{order.stage === 2 && order.car && (
				<OrderMobileButton
					color={"green"}
					onClick={() => handleButton(order.stage + 1)}
				>
					{TEXT.additionally}
				</OrderMobileButton>
			)}
		</TotalMobileMainContainer>
	);
};
