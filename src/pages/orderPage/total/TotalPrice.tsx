import React from "react";
import { useSelector } from "react-redux";
import { eachHourOfInterval } from "date-fns";
import { getOrder } from "store/order/selectors";
import { TotalPrice as TotalPriceContainer, TotalPriceTitle } from "./styled";
import { TEXT } from "constants/text";

export const TotalPrice = () => {
	const order = useSelector(getOrder);
	let rate = order.rate;
	let from = order.additionally.reservedTime.from;
	let to = order.additionally.reservedTime.to;

	const priceWithSpaces = (value: number) => {
		let string: string = value.toString();
		return string.replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
	};

	if (rate && from && to) {
		let interval = eachHourOfInterval({ start: new Date(from), end: new Date(to) });

		// rent per minutes
		if (rate.rateTypeId.id === "5e26a07f099b810b946c5d82") {
			return (
				<TotalPriceContainer>
					<TotalPriceTitle>{TEXT.price + ": "}</TotalPriceTitle>
					{priceWithSpaces(Math.ceil(interval.length * 60) * rate.price) + TEXT.currency}
				</TotalPriceContainer>
			);
		}

		// rent for a day
		if (rate.rateTypeId.id === "5e26a082099b810b946c5d83") {
			return (
				<TotalPriceContainer>
					<TotalPriceTitle>{TEXT.price + ": "}</TotalPriceTitle>
					{priceWithSpaces(Math.ceil(interval.length / 24) * rate.price) + TEXT.currency}
				</TotalPriceContainer>
			);
		}
		// rent for 7 days
		if (rate.rateTypeId.id === "5f622f029d3a610b850fd820") {
			return (
				<TotalPriceContainer>
					<TotalPriceTitle>{TEXT.price + ": "}</TotalPriceTitle>
					{priceWithSpaces(Math.ceil(interval.length / 24 / 7) * rate.price) +
						TEXT.currency}
				</TotalPriceContainer>
			);
		}
	}

	return null;
};
