import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "store/order/selectors";
import { orderActions } from "store/order/reducer";
import { StageTitle } from "components/typography";
import { StageIcon } from "components/icons";
import { StageTitleContainer } from "components/containers";
import { MobileStageContainer } from "./styled";
import FormControl from "@material-ui/core/FormControl";
import { StageStyledSelect, StageStyledMenuItem } from "./styled";

export const Stages = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);

	const activeHandler = (position: number) => {
		//TODO: change to new condition
		switch (position) {
			case 1:
				dispatch(orderActions.setStage(position));
				break;
			case 2:
				order.point && dispatch(orderActions.setStage(position));
				break;
			case 3:
				order.car && dispatch(orderActions.setStage(position));
				break;
			default:
				break;
		}
	};

	const disableHandler = (stage: number) => {
		switch (stage) {
			case 1:
				return false;
			case 2:
				return order.city && order.point ? false : true;
			case 3:
				return order.city && order.point && order.car ? false : true;

			// TODO: will be implemented after V-04
			// case 4:
			//   return order.point ? false : false

			default:
				return true;
		}
	};

	return (
		<>
			{/* Stage for desktop */}
			{stages.map((stage) => (
				<StageTitleContainer key={stage.position + stage.title}>
					<StageTitle
						active={stage.position === order.stage ? true : false}
						disable={disableHandler(stage.position)}
						onClick={() => activeHandler(stage.position)}
					>
						{stage.title}
					</StageTitle>
					{stage.position !== 4 && <StageIcon />}
				</StageTitleContainer>
			))}

			{/* Stage for mobile */}
			<MobileStageContainer>
				<FormControl>
					<StageStyledSelect
						onChange={(event: React.ChangeEvent<{ value: any }>) =>
							activeHandler(Number.parseInt(event.target.value))
						}
						disableUnderline={true}
						value={order.stage}
						inputProps={{
							name: "stage",
							id: "stage-native-simple",
						}}
					>
						<StageStyledMenuItem value={1} disabled={disableHandler(1)}>
							{stages[0].title}
						</StageStyledMenuItem>
						<StageStyledMenuItem value={2} disabled={disableHandler(2)}>
							{stages[1].title}
						</StageStyledMenuItem>
						<StageStyledMenuItem value={3} disabled={disableHandler(3)}>
							{stages[2].title}
						</StageStyledMenuItem>
						<StageStyledMenuItem value={4} disabled={disableHandler(4)}>
							{stages[3].title}
						</StageStyledMenuItem>
					</StageStyledSelect>
				</FormControl>
			</MobileStageContainer>
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
