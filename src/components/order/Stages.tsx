import React from "react";
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

	const activeHandler = ({ position, title }: StageType) => {
		//TODO: change to new condition
		switch (position) {
			case 1:
				dispatch(orderActions.setStage(position));
				break;
			case 2:
				order.pickup && dispatch(orderActions.setStage(position));
				break;
			case 3:
				order.car && dispatch(orderActions.setStage(position));
				break;
			default:
				break;
		}
	};

	return (
		<>
			{stages.map((stage) => (
				<StageTitleContainer key={stage.position + stage.title}>
					<StageTitle
						active={stage.position === order.stage ? true : false}
						disable={stage.position < order.stage ? false : true}
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
