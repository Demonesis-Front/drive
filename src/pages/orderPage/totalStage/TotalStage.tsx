import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "store/order/selectors";
import { getMyOrder } from "store/myOrder/selectors";
import { StageContainer } from "../styled";
import { url } from "services/main/api";
import {
	TotalStageContainer,
	DetailContainer,
	CarName,
	CarNumber,
	DetailTitle,
	DetailInfo,
	CarContainer,
	CarImage,
} from "./styled";
import { TEXT } from "constants/text";
import { orderActions } from "store/order/reducer";

type TotalStagePropsType = {
	children?: React.ReactChild | false;
};

export const TotalStage = ({ children }: TotalStagePropsType) => {
	const order = useSelector(getOrder);
	const myOrder = useSelector(getMyOrder);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(orderActions.initTotalStage());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const setCarNumberSpace = (number: string | undefined) => {
		if (number) {
			const first = number.slice(0, 1).toLocaleUpperCase();
			const second = number.slice(1, 4);
			const third = number.slice(4, 6).toLocaleUpperCase();
			const region = number.slice(6, number.length);

			return `${first} ${second} ${third} ${region}`;
		}
	};

	return (
		<StageContainer>
			<TotalStageContainer>
				{/* Detail */}
				<DetailContainer>
					{children}
					<CarName>{myOrder.carId?.name || order.car?.name}</CarName>
					{myOrder.carId?.number ? (
						<CarNumber>{setCarNumberSpace(myOrder.carId?.number)}</CarNumber>
					) : (
						order.car?.number && (
							<CarNumber>{setCarNumberSpace(order.car?.number)}</CarNumber>
						)
					)}
					<DetailTitle>
						{TEXT.fuel}
						{myOrder.isFullTank ? (
							<DetailInfo>{myOrder.isFullTank ? "100%" : TEXT.minimalFuel}</DetailInfo>
						) : (
							<DetailInfo>
								{order.additionally.services.isFullTank ? "100%" : TEXT.minimalFuel}
							</DetailInfo>
						)}
					</DetailTitle>
					<DetailTitle>
						{TEXT.availableFrom}
						{myOrder.dateFrom ? (
							<DetailInfo>
								{new Date(myOrder.dateFrom).toLocaleDateString() +
									" " +
									new Date(myOrder.dateFrom).toLocaleTimeString().slice(0, 5)}
							</DetailInfo>
						) : (
							<DetailInfo>
								{order.additionally?.reservedTime.from?.toLocaleDateString() +
									" " +
									order.additionally?.reservedTime.from?.toLocaleTimeString().slice(0, 5)}
							</DetailInfo>
						)}
					</DetailTitle>
				</DetailContainer>
				{/* Car */}
				<CarContainer>
					{myOrder.carId?.thumbnail.path ? (
						<CarImage img={url + myOrder.carId?.thumbnail.path} />
					) : (
						<CarImage img={url + order.car?.thumbnail.path} />
					)}
				</CarContainer>
			</TotalStageContainer>
		</StageContainer>
	);
};
