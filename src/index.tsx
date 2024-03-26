import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import ThemeProviders from "./Theme/ThemeProvider";
import { initalState } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={initalState}>
			<ThemeProviders />
		</Provider>
	</React.StrictMode>
);
