import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "store/order/reducer";
import { getOrder } from "store/order/selectors";
import { TotalButton } from "./TotalButton";
import { TotalPrice } from "./TotalPrice";
import { TotalDuration } from "./TotalDuration";
import { TotalPopUp } from "./TotalPopUp";
import {
	TotalContainer,
	TotalDetailContainer,
	TotalMainContainer,
	TotalTitle,
	TotalDetail,
	TotalDetailBorderBottom,
	TotalDetailTitle,
} from "./styled";
import { TEXT } from "constants/text";
import { PATH } from "navigation/path";

type TotalPropsType = {
	active: boolean;
	children?: any;
	onClickButton?: () => void;
};

export const Total = ({ active, children }: TotalPropsType) => {
	const history = useHistory();
	const order = useSelector(getOrder);
	const dispatch = useDispatch();
	const [showConfirmPopUp, setShowConfirmPopUp] = useState<boolean>(false);

	const showConfirmPopUpHandler = () => setShowConfirmPopUp(true);
	const hideConfirmPopUpHandler = () => setShowConfirmPopUp(false);

	const confirmOrderHandler = () => {
		// TODO: need to change null to data from special order selector
		dispatch(orderActions.confirmOrder(null));
		setShowConfirmPopUp(false);
		// TODO: need to change id from orderStatusId or any id
		history.push(PATH.orderById + "RM12456313123");
	};

	return (
		<TotalMainContainer>
			<TotalContainer active={active}>
				<TotalTitle>{TEXT.totalTitle + ":"}</TotalTitle>

				{order.city && (
					<TotalDetailContainer right={true}>
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

				{order.car && order.additionally?.color && (
					<TotalDetailContainer>
						<TotalDetailTitle>{TEXT.color}</TotalDetailTitle>
						<TotalDetailBorderBottom />
						<TotalDetail>
							{order.additionally?.color[0].toUpperCase() +
								order.additionally.color?.slice(1)}
						</TotalDetail>
					</TotalDetailContainer>
				)}

				{/* Duration */}
				<TotalDuration />

				{order.car && order.rate && (
					<TotalDetailContainer>
						<TotalDetailTitle>{TEXT.rate}</TotalDetailTitle>
						<TotalDetailBorderBottom />
						<TotalDetail>{order.rate.rateTypeId.name}</TotalDetail>
					</TotalDetailContainer>
				)}

				{order.car && order.additionally?.services.isFullTank && (
					<TotalDetailContainer>
						<TotalDetailTitle>{TEXT.fullTank}</TotalDetailTitle>
						<TotalDetailBorderBottom />
						<TotalDetail>{TEXT.yes}</TotalDetail>
					</TotalDetailContainer>
				)}
				{order.car && order.additionally?.services.isNeedChildChair && (
					<TotalDetailContainer>
						<TotalDetailTitle>{TEXT.needChildChair}</TotalDetailTitle>
						<TotalDetailBorderBottom />
						<TotalDetail>{TEXT.yes}</TotalDetail>
					</TotalDetailContainer>
				)}
				{order.car && order.additionally?.services.isRightWheel && (
					<TotalDetailContainer>
						<TotalDetailTitle>{TEXT.rightWheel}</TotalDetailTitle>
						<TotalDetailBorderBottom />
						<TotalDetail>{TEXT.yes}</TotalDetail>
					</TotalDetailContainer>
				)}

				{/* Total */}
				<TotalPrice />
			</TotalContainer>

			{/* Button */}
			{children ? (
				children
			) : (
				<TotalButton
					buttonColor={"green"}
					buttonText={"text"}
					onClickButton={showConfirmPopUpHandler}
				/>
			)}

			{/* TotalPopUp */}
			<TotalPopUp
				show={showConfirmPopUp}
				confirmFn={confirmOrderHandler}
				returnFn={hideConfirmPopUpHandler}
			/>
		</TotalMainContainer>
	);
};
