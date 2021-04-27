import React from "react";
import { LinkContainer } from "components/link/LinkContainer";
import { HeaderContainer } from "common/containers";
import { Logo } from "components/header/Logo";
import { City } from "components/header/City";
import { PATH } from "navigation/path";

export const Header = () => {
	return (
		<HeaderContainer>
			<LinkContainer to={PATH.home}>
				<Logo />
			</LinkContainer>
			<City />
		</HeaderContainer>
	);
};
