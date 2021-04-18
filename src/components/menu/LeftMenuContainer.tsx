import React, { useState } from "react";
import { PopUp100, MenuContainer } from "components/containers";
import { LanguageMenu } from "components/typography";
import { HamburgerMenu, ClosePopUp } from "components/icons";
import { LANGUAGES } from "constants/languages";
import { LeftMenu } from "components/menu/LeftMenu";

export const LeftMenuContainer = () => {
	const [popup, setPopUp] = useState<boolean>(false);

	const showPopUpHandler = () => setPopUp(true);
	const hidePopUpHandler = () => setPopUp(false);

	return (
		<>
			{popup && <PopUp100 />}

			<MenuContainer>
				{!popup && <HamburgerMenu onClick={showPopUpHandler} />}
				{popup && <ClosePopUp onClick={hidePopUpHandler} />}
				{popup && <LeftMenu />}

				<LanguageMenu>{LANGUAGES.rus}</LanguageMenu>
			</MenuContainer>
		</>
	);
};
