import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "store/order/selectors";
import { OrderButton } from "common/buttons";
import { TEXT } from "constants/text";
import { orderActions } from "store/order/reducer";

type TotalButtonPropsType = {
	buttonColor: string;
	buttonText: string;
	onClickButton?: () => void;
};

export const TotalButton = ({
	buttonColor,
	buttonText,
	onClickButton,
}: TotalButtonPropsType) => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);

	const handleButton = (stage: number) => {
		dispatch(orderActions.setStage(stage));
	};

	// stage 1
	if (order.stage === 1 && !order.point) {
		return <OrderButton color={"grey"}>{TEXT.choseModel}</OrderButton>;
	}
	if (order.stage === 1 && order.point) {
		return (
			<OrderButton color={"green"} onClick={() => handleButton(order.stage + 1)}>
				{TEXT.choseModel}
			</OrderButton>
		);
	}
	// stage 2
	if (order.stage === 2 && !order.car) {
		return <OrderButton color={"grey"}>{TEXT.additionally}</OrderButton>;
	}
	if (order.stage === 2 && order.car) {
		return (
			<OrderButton color={"green"} onClick={() => handleButton(order.stage + 1)}>
				{TEXT.additionally}
			</OrderButton>
		);
	}
	// stage 3
	if (order.stage === 3 && !order.rate) {
		return <OrderButton color={"grey"}>{TEXT.total}</OrderButton>;
	}
	if (order.stage === 3 && !order.additionally.reservedTime.from) {
		return <OrderButton color={"grey"}>{TEXT.total}</OrderButton>;
	}
	if (order.stage === 3 && !order.additionally.reservedTime.to) {
		return <OrderButton color={"grey"}>{TEXT.total}</OrderButton>;
	}
	if (
		order.stage === 3 &&
		order.rate &&
		order.additionally.reservedTime.from &&
		order.additionally.reservedTime.to
	) {
		return (
			<OrderButton color={"green"} onClick={() => handleButton(order.stage + 1)}>
				{TEXT.total}
			</OrderButton>
		);
	}

	// stage 4
	if (order.stage === 4) {
		return (
			<OrderButton color={"green"} onClick={onClickButton}>
				{TEXT.toOrder}
			</OrderButton>
		);
	}

	return <></>;
};
