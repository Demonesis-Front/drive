import React from "react";
import { RateDBType } from "store/order/types";
import { Container, TitleContainer, Title, Icon } from "./styled";
import { TEXT } from "constants/text";

interface RatesRadioProps {
	options: RateDBType[];
	active: RateDBType | null;
	fn: (option: RateDBType) => void;
}

export const RatesRadio = ({ options, active, fn }: RatesRadioProps) => {
	const handler = (option: RateDBType) => fn(option);

	return (
		<>
			<Container>
				{options.map((option) => (
					<TitleContainer key={option.rateTypeId.id} onClick={() => handler(option)}>
						<Icon active={active?.rateTypeId.id === option.rateTypeId.id ? true : false} />
						<Title active={active?.rateTypeId.id === option.rateTypeId.id ? true : false}>
							{option.rateTypeId.name[0].toUpperCase() +
								option.rateTypeId.name.slice(1) +
								", " +
								option.price +
								TEXT.currency +
								"/" +
								option.rateTypeId.unit}
						</Title>
					</TitleContainer>
				))}
			</Container>
		</>
	);
};
