import React, { useState } from "react";
import { PopUp100, MenuContainer } from "components/containers";
import { LanguageMenu } from "components/typography";
import { HamburgerMenu, ClosePopUp } from "components/icons";
import { LANGUAGES } from "constants/languages";
import { LeftMenu } from "components/menu/LeftMenu";

export const LeftMenuContainer = () => {
	const [popup, setPopUp] = useState<boolean>(false);
	const [language, setLanguage] = useState<boolean>(false);

	const showPopUpHandler = () => setPopUp(true);
	const hidePopUpHandler = () => setPopUp(false);
	const languageHandler = () => setLanguage(!language);

	return (
		<>
			{popup && <PopUp100 />}

			<MenuContainer>
				{!popup && <HamburgerMenu onClick={showPopUpHandler} />}
				{popup && <ClosePopUp onClick={hidePopUpHandler} />}
				{popup && <LeftMenu />}

				<LanguageMenu active={popup ? true : false} onClick={languageHandler}>
					{language ? LANGUAGES.eng : LANGUAGES.rus}
				</LanguageMenu>
			</MenuContainer>
		</>
	);
};
