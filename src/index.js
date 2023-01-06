import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import LettersProvider from "./Context/LettersProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<LettersProvider>
		<App />
	</LettersProvider>,
);
