import React from "react";
// @ts-ignore
import Carousel from "re-carousel";
import {
	SliderContainer,
	CarouselContainer,
	SliderTextContainer,
	SliderLinerGradient,
} from "components/containers";
import { CarouselButtons as Buttons } from "./CarouselButtons";
import { IndicatorDots } from "./IndicatorDots";
import { carouselData } from "./mock";
import { SliderTitle, SliderSubTitle } from "components/typography";
import { SliderButton } from "components/buttons/buttons";

export const HomeCarousel = () => {
	return (
		<CarouselContainer>
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
		</CarouselContainer>
	);
};
