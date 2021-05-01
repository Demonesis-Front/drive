import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderActions } from "store/order/reducer";
import { OrderButton } from "common/buttons";
import { TEXT } from "constants/text";
import { PATH } from "navigation/path";
import { myOrderActions } from "store/myOrder/reducer";

export const MyOrderPageButton = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const cancelHandler = () => {
		// TODO: need to set default myOrderId = null in reducer
		dispatch(myOrderActions.setInitialData());
		dispatch(orderActions.setInitialData());
		history.push(PATH.order);
	};

	return (
		<OrderButton color={"red"} onClick={cancelHandler}>
			{TEXT.cancel}
		</OrderButton>
	);
};
