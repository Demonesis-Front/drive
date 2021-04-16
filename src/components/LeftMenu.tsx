import React, { useState } from "react";
import {
	LeftMenuList,
	LeftMenuItem,
	SocialMenuContainer,
	SocialRoundContainer,
} from "components/containers";
import { TelegramIcon, FacebookIcon, InstagramIcon } from "components/icons";

export const LeftMenu = () => {
	const [active, setActive] = useState("2");
	const links = [
		{
			id: "1",
			title: "ПАРКОВКА",
		},
		{
			id: "2",
			title: "СТРАХОВКА",
		},
		{
			id: "3",
			title: "БЕНЗИН",
		},
		{
			id: "4",
			title: "ОБСЛУЖИВАНИЕ",
		},
	];

	const activeHandler = (id: string) => setActive(id);

	return (
		<>
			<LeftMenuList>
				{links.map((link) => (
					<LeftMenuItem
						key={link.id}
						active={link.id === active ? true : false}
						onClick={() => activeHandler(link.id)}
					>
						{link.title}
					</LeftMenuItem>
				))}
			</LeftMenuList>

			<SocialMenuContainer>
				<SocialRoundContainer>
					<TelegramIcon />
				</SocialRoundContainer>
				<SocialRoundContainer>
					<FacebookIcon />
				</SocialRoundContainer>
				<SocialRoundContainer>
					<InstagramIcon />
				</SocialRoundContainer>
			</SocialMenuContainer>
		</>
	);
};
