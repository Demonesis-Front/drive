import React from "react";
// @ts-ignore
import Carousel from "re-carousel";
import {
	SliderContainer,
	SliderTextContainer,
	SliderLinerGradient,
	SliderTitle,
	SliderSubTitle,
} from "./styled";
import { CarouselButtons as Buttons } from "./CarouselButtons";
import { IndicatorDots } from "./IndicatorDots";
import { carouselData } from "./mock";
import { SliderButton } from "common/buttons";

export const HomeCarousel = () => {
	return (
		<Carousel widgets={[IndicatorDots, Buttons]}>
			{carouselData.map((slider) => (
				<SliderContainer key={slider.id} image={slider.image}>
					<SliderTextContainer>
						<SliderTitle>{slider.title}</SliderTitle>
						<SliderSubTitle>{slider.subTitle}</SliderSubTitle>
						<SliderButton color={slider.buttonColor}>{slider.buttonText}</SliderButton>
					</SliderTextContainer>
					<SliderLinerGradient />
				</SliderContainer>
			))}
		</Carousel>
	);
};
