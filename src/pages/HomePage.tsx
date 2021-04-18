import React from "react";
import {
	PageContainer,
	SectionContainer,
	HeaderContainer,
	OfferContainer,
	FooterContainer,
} from "components/containers";
import { BookButton } from "components/buttons/buttons";
import { Logo } from "components/Logo";
import { City } from "components/City";
import {
	OfferTitle,
	OfferSubTitle,
	OfferDescription,
	LicenseText,
	TelephoneNumber,
} from "components/typography";
import { TEXT } from "constants/text";
import { HomeCarousel } from "components/carousels/main/HomeCarousel";

export const HomePage = () => {
	return (
		<PageContainer>
			<SectionContainer>
				<HeaderContainer>
					<Logo />
					<City />
				</HeaderContainer>

				<OfferContainer>
					<OfferTitle>{TEXT.carsharing}</OfferTitle>
					<OfferSubTitle>{TEXT.needDrive}</OfferSubTitle>
					<OfferDescription>{TEXT.offerSubTitle}</OfferDescription>
					<BookButton>{TEXT.book}</BookButton>
				</OfferContainer>

				<FooterContainer>
					<LicenseText>{TEXT.license}</LicenseText>
					<TelephoneNumber>{TEXT.telephone}</TelephoneNumber>
				</FooterContainer>
			</SectionContainer>

			<HomeCarousel />
		</PageContainer>
	);
};
