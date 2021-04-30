import React from "react";
import { useSelector } from "react-redux";
import { getOrder } from "store/order/selectors";
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

type TotalStagePropsType = {
	children?: React.ReactChild;
};

export const TotalStage = ({ children }: TotalStagePropsType) => {
	const order = useSelector(getOrder);

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
					<CarName>{order.car?.name}</CarName>
					{order.car?.number && (
						<CarNumber>{setCarNumberSpace(order.car?.number)}</CarNumber>
					)}
					<DetailTitle>
						{TEXT.fuel}
						<DetailInfo>
							{order.additionally.services.isFullTank ? "100%" : TEXT.minimalFuel}
						</DetailInfo>
					</DetailTitle>
					<DetailTitle>
						{TEXT.availableFrom}
						<DetailInfo>
							{order.additionally?.reservedTime.from?.toLocaleDateString() +
								" " +
								order.additionally?.reservedTime.from?.toLocaleTimeString().slice(0, 5)}
						</DetailInfo>
					</DetailTitle>
				</DetailContainer>
				{/* Car */}
				<CarContainer>
					<CarImage img={url + order.car?.thumbnail.path} />
				</CarContainer>
			</TotalStageContainer>
		</StageContainer>
	);
};
