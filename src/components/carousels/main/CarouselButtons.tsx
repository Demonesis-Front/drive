import React, { CSSProperties } from "react";
import { CarouselButtonContainer } from "components/containers";
import {
	CarouselLeftButton,
	CarouselRightButton,
} from "components/buttons/buttons";

export const CarouselButtons = (props: any) => {
	const { index, total, loop, prevHandler, nextHandler } = props;
	return (
		<div style={wrapper}>
			{(loop || index !== 0) && (
				<CarouselButtonContainer right={true} onClick={prevHandler}>
					<CarouselLeftButton />
				</CarouselButtonContainer>
			)}
			{(loop || index !== total - 1) && (
				<CarouselButtonContainer onClick={nextHandler}>
					<CarouselRightButton />
				</CarouselButtonContainer>
			)}
		</div>
	);
};

const wrapper: CSSProperties = {
	position: "absolute",
	width: "100%",
	zIndex: 100,
	bottom: "0",
	textAlign: "center",
};
