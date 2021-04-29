import React from "react";
import { Container, TitleContainer, Title, Icon } from "./styled";

interface HorizontalRadioProps {
	options: string[];
	active: string | null;
	fn: (option: string) => void;
}

export const HorizontalRadio = ({
	options,
	active,
	fn,
}: HorizontalRadioProps) => {
	const handler = (option: string) => fn(option);

	return (
		<>
			<Container>
				{options.map((option) => (
					<TitleContainer key={option} onClick={() => handler(option)}>
						<Icon active={active === option ? true : false} />
						<Title active={active === option ? true : false}>
							{option[0].toUpperCase() + option.slice(1)}
						</Title>
					</TitleContainer>
				))}
			</Container>
		</>
	);
};
