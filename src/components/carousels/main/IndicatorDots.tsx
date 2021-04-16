import React from "react";
import { CarouselIndicator as Dot } from "components/buttons/buttons";
import { IndicatorContainer } from "components/containers";

export const IndicatorDots = (props: any) => {
	if (props.total < 2) {
		// Hide dots when there is only one dot.
		return <IndicatorContainer />;
	} else {
		return (
			<IndicatorContainer>
				{Array.apply(null, Array(props.total)).map((x, i) => {
					return <Dot key={i} selected={props.index === i} />;
				})}
			</IndicatorContainer>
		);
	}
};
