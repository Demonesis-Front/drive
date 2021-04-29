import React from "react";
import {
	Container,
	TitleContainer,
	Title,
	Icon,
	IconContainer,
} from "./styled";
import { AdditionallyServiceType } from "constants/service";
import { TEXT } from "constants/text";

interface AdditionallyCheckboxProps {
	option: AdditionallyServiceType;
	active: boolean;
	fn: () => void;
}

export const AdditionallyCheckbox = ({
	option,
	active,
	fn,
}: AdditionallyCheckboxProps) => {
	const handler = () => fn();

	return (
		<>
			<Container>
				<TitleContainer key={option.id} onClick={() => handler()}>
					<IconContainer active={active ? true : false}>
						{active && <Icon />}
					</IconContainer>
					<Title active={active ? true : false}>
						{option.name[0].toUpperCase() +
							option.name.slice(1) +
							", " +
							option.price +
							TEXT.currency}
					</Title>
				</TitleContainer>
			</Container>
		</>
	);
};
