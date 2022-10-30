import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import "./index.scss";
import "./assets/scss-variables/colors.scss";
import "./assets/scss-variables/spaces.scss";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(<App />);
