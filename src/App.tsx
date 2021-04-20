import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";
import { Navigation } from "navigation/Navigation";

import { LeftMenuContainer } from "components/menu/LeftMenuContainer";

function App() {
	return (
		<Provider store={store}>
			<LeftMenuContainer />
			<Navigation />
		</Provider>
	);
}

export default App;
