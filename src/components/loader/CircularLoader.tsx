import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { CircularContainer } from "./styled";
import CircularProgress from "@material-ui/core/CircularProgress";
import { COLORS } from "constants/colors";

export const CircularLoader = () => {
	return (
		<CircularContainer>
			<ThemeProvider theme={defaultMaterialTheme}>
				<CircularProgress color={"primary"} />
			</ThemeProvider>
		</CircularContainer>
	);
};

const defaultMaterialTheme = createMuiTheme({
	palette: {
		primary: {
			main: COLORS.green,
		},
		secondary: {
			main: COLORS.black,
		},
	},
});
