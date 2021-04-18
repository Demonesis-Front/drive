import React, { useState } from "react";
import {
	PageContainer,
	SectionContainer,
	HeaderContainer,
	OfferContainer,
	FooterContainer,
	PopUp100,
	LeftMenuContainer,
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
	LanguageMenu,
} from "components/typography";
import { TEXT } from "constants/text";
import { HomeCarousel } from "components/carousels/main/HomeCarousel";
import { HamburgerMenu, ClosePopUp } from "components/icons";
import { LANGUAGES } from "constants/languages";
import { LeftMenu } from "components/LeftMenu";

export const HomePage = () => {
	const [popup, setPopUp] = useState<boolean>(false);

	const showPopUpHandler = () => setPopUp(true);
	const hidePopUpHandler = () => setPopUp(false);

	return (
		<PageContainer>
			{popup && <PopUp100 />}

			<LeftMenuContainer>
				{!popup && <HamburgerMenu onClick={showPopUpHandler} />}
				{popup && <ClosePopUp onClick={hidePopUpHandler} />}
				{popup && <LeftMenu />}

				<LanguageMenu>{LANGUAGES.rus}</LanguageMenu>
			</LeftMenuContainer>

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
