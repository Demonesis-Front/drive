import React from "react";
import { eachHourOfInterval } from "date-fns";
import { useSelector } from "react-redux";
import { getOrder } from "store/order/selectors";
import {
	TotalDetailContainer,
	TotalDetail,
	TotalDetailBorderBottom,
	TotalDetailTitle,
} from "./styled";
import { TEXT } from "constants/text";

export const TotalDuration = () => {
	const order = useSelector(getOrder);
	let rate = order.rate;
	let from = order.additionally.reservedTime.from;
	let to = order.additionally.reservedTime.to;

	if (rate && from && to) {
		let interval = eachHourOfInterval({ start: new Date(from), end: new Date(to) });
		let days = Math.floor(interval.length / 24);
		let hours = Math.floor(interval.length % 24);
		let durationString = `${days ? days + TEXT.d : ""} ${hours + TEXT.h}`;

		return (
			<TotalDetailContainer>
				<TotalDetailTitle>{TEXT.duration}</TotalDetailTitle>
				<TotalDetailBorderBottom />
				<TotalDetail>{durationString}</TotalDetail>
			</TotalDetailContainer>
		);
	}

	return null;
};
