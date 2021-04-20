import React from "react";
import {
	HomePageContainer,
	SectionContainer,
	OfferContainer,
	FooterContainer,
} from "components/containers";
import { BookButton } from "components/buttons/buttons";

import {
	OfferTitle,
	OfferSubTitle,
	OfferDescription,
	LicenseText,
	TelephoneNumber,
} from "components/typography";
import { TEXT } from "constants/text";
import { HomeCarousel } from "components/carousels/main/HomeCarousel";
import { Header } from "components/Header";
import { PATH } from "navigation/path";
import { LinkContainer } from "components/LinkContainer";

export const HomePage = () => {
	return (
		<HomePageContainer>
			<SectionContainer>
				<Header />

				<OfferContainer>
					<OfferTitle>{TEXT.carsharing}</OfferTitle>
					<OfferSubTitle>{TEXT.needDrive}</OfferSubTitle>
					<OfferDescription>{TEXT.offerSubTitle}</OfferDescription>
					<LinkContainer to={PATH.order}>
						<BookButton>{TEXT.book}</BookButton>
					</LinkContainer>
				</OfferContainer>

				<FooterContainer>
					<LicenseText>{TEXT.license}</LicenseText>
					<TelephoneNumber>{TEXT.telephone}</TelephoneNumber>
				</FooterContainer>
			</SectionContainer>

			<HomeCarousel />
		</HomePageContainer>
	);
};
