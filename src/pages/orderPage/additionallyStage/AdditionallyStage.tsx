import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "store/order/reducer";
import { getOrder } from "store/order/selectors";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ParagraphTitle, DateTimeContainer, DateTimeTitle } from "./styled";
import { StageContainer } from "./../styled";
import { HorizontalRadio } from "components/radio/horizontal/HorizontalRadio";
import { RatesRadio } from "components/radio/vertical/RatesRadio";
import { DateTimePicker } from "components/datetime/DateTimePicker";
import { TEXT } from "constants/text";
import { RateDBType } from "store/order/types";
import { AdditionallyCheckbox } from "./AdditionallyCheckbox";
import { additionallyServices } from "constants/service";

export const AdditionallyStage = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);

	const colorHandler = (color: string) => dispatch(orderActions.setColor(color));
	const rateHandler = (rate: RateDBType) => dispatch(orderActions.setRate(rate));
	// datetime handlers
	const dateTimeFromHandler = (value: MaterialUiPickersDate) =>
		dispatch(orderActions.setDateTimeFrom(value));
	const dateTimeToHandler = (value: MaterialUiPickersDate) =>
		dispatch(orderActions.setDateToFrom(value));

	// Checkboxes handlers
	const fullTankHandler = () => dispatch(orderActions.setFullTank());
	const needChildChairHandler = () => dispatch(orderActions.setNeedChildChair());
	const rightWheelHandler = () => dispatch(orderActions.setRightWheel());

	return (
		<StageContainer>
			{order.car?.colors[0] && <ParagraphTitle>{TEXT.color}</ParagraphTitle>}
			{order.car?.colors[0] && (
				<HorizontalRadio
					options={order.car?.colors}
					active={order.additionally.color}
					fn={colorHandler}
				/>
			)}

			<ParagraphTitle>{TEXT.rentDate}</ParagraphTitle>
			<DateTimeContainer>
				<DateTimeTitle>{TEXT.fromTime}</DateTimeTitle>
				<DateTimePicker
					option={order.additionally.reservedTime.from}
					fn={dateTimeFromHandler}
				/>
			</DateTimeContainer>
			<DateTimeContainer>
				<DateTimeTitle>{TEXT.toTime}</DateTimeTitle>
				<DateTimePicker
					option={order.additionally.reservedTime.to}
					fn={dateTimeToHandler}
				/>
			</DateTimeContainer>
			<ParagraphTitle>{TEXT.rate}</ParagraphTitle>
			{order.rates && (
				<RatesRadio options={order.rates} active={order.rate} fn={rateHandler} />
			)}
			<ParagraphTitle>{TEXT.additionalServices}</ParagraphTitle>
			<AdditionallyCheckbox
				option={additionallyServices.fullTank}
				active={order.additionally.services.isFullTank}
				fn={fullTankHandler}
			/>
			<AdditionallyCheckbox
				option={additionallyServices.needChildChair}
				active={order.additionally.services.isNeedChildChair}
				fn={needChildChairHandler}
			/>
			<AdditionallyCheckbox
				option={additionallyServices.rightWheel}
				active={order.additionally.services.isRightWheel}
				fn={rightWheelHandler}
			/>
		</StageContainer>
	);
};
