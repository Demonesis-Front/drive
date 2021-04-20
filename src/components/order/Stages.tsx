import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "store/order/selectors";
import { orderActions } from "store/order/reducer";
import { StageTitle } from "components/typography";
import { StageIcon } from "components/icons";
import { StageTitleContainer } from "components/containers";

type StageType = {
	position: number;
	title: string;
};

export const Stages = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);
	const [active, setActive] = useState<number>(1);

	const activeHandler = ({ position, title }: StageType) => {
		//TODO: change to new condition
		if (position > 2) {
			return;
		}

		if (order.pickup) {
			setActive(position);
			dispatch(orderActions.setStage(position));
		}
	};

	return (
		<>
			{stages.map((stage) => (
				<StageTitleContainer key={stage.position + stage.title}>
					<StageTitle
						active={stage.position === active ? true : false}
						disable={stage.position < active ? false : true}
						onClick={() => activeHandler(stage)}
					>
						{stage.title}
					</StageTitle>
					{stage.position !== 4 && <StageIcon />}
				</StageTitleContainer>
			))}
		</>
	);
};

const stages = [
	{
		position: 1,
		title: "Местоположение",
	},
	{
		position: 2,
		title: "Модель",
	},
	{
		position: 3,
		title: "Дополнительно",
	},
	{
		position: 4,
		title: "Итого",
	},
];
