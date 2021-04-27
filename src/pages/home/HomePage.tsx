import React from "react";
import {
	HomePageContainer,
	SectionContainer,
	OfferContainer,
	FooterContainer,
} from "common/containers";
import { BookButton } from "common/buttons";

import {
	OfferTitle,
	OfferSubTitle,
	OfferDescription,
	LicenseText,
	TelephoneNumber,
} from "./styled";
import { TEXT } from "constants/text";
import { HomeCarousel } from "pages/home/carousels/main/HomeCarousel";
import { Header } from "components/header/Header";
import { PATH } from "navigation/path";
import { LinkContainer } from "components/link/LinkContainer";

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
