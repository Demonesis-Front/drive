import React from "react";
import {
	TotalPopUpConfirmButton,
	TotalPopUpReturnButton,
} from "common/buttons";
import {
	PopUpBackground,
	PopUpButtonsContainer,
	PopUpTitle,
	PopUpButtonsDelimiter,
} from "./styled";
import { TEXT } from "constants/text";

type TotalPopUpPropsType = {
	show: boolean;
	confirmFn: () => void;
	returnFn: () => void;
};

export const TotalPopUp = ({
	show,
	confirmFn,
	returnFn,
}: TotalPopUpPropsType) => {
	if (show) {
		return (
			<PopUpBackground>
				<PopUpTitle>{TEXT.confirmOrder}</PopUpTitle>
				<PopUpButtonsContainer>
					<TotalPopUpConfirmButton color="green" onClick={confirmFn}>
						{TEXT.confirm}
					</TotalPopUpConfirmButton>
					<PopUpButtonsDelimiter />
					<TotalPopUpReturnButton color="red" onClick={returnFn}>
						{TEXT.return}
					</TotalPopUpReturnButton>
				</PopUpButtonsContainer>
			</PopUpBackground>
		);
	}

	return null;
};
