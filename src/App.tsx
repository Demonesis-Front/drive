import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import { Navigation } from "navigation/Navigation";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { LeftMenuContainer } from "components/menu/LeftMenuContainer";
import { COLORS } from "constants/colors";

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={defaultMaterialTheme}>
				<LeftMenuContainer />
				<Navigation />
			</ThemeProvider>
		</Provider>
	);
}

export default App;

const defaultMaterialTheme = createMuiTheme({
	palette: {
		primary: {
			main: COLORS.green,
		},
		secondary: {
			main: COLORS.grey,
		},
	},
	props: {
		MuiPopover: {
			style: {
				zIndex: 3000,
			},
		},
	},
});
