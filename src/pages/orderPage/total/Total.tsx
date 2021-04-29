import React from "react";
import { useSelector } from "react-redux";
import { getOrder } from "store/order/selectors";
import { TotalButton } from "./TotalButton";
import { TotalPrice } from "./TotalPrice";
import { TotalDuration } from "./TotalDuration";
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

type TotalPropsType = {
	active: boolean;
};

export const Total = ({ active }: TotalPropsType) => {
	const order = useSelector(getOrder);

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
			<TotalButton />
		</TotalMainContainer>
	);
};
