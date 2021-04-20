import React from "react";
import { LinkContainer } from "components/LinkContainer";
import { HeaderContainer } from "components/containers";
import { Logo } from "components/Logo";
import { City } from "components/City";
import { PATH } from "navigation/path";

export const Header = () => {
	return (
		<HeaderContainer>
			<LinkContainer to={PATH.drive}>
				<Logo />
			</LinkContainer>
			<City />
		</HeaderContainer>
	);
};
