import React from "react";
import { CircularContainer } from "./styled";
import CircularProgress from "@material-ui/core/CircularProgress";

export const CircularLoader = () => {
	return (
		<CircularContainer>
			<CircularProgress color={"primary"} />
		</CircularContainer>
	);
};
