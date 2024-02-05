import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
// biome-ignore lint/style/noNonNullAssertion: <explanation>

const sdkOptions = {
	dappMetadata: {
		name: "Example React Dapp",
		url: window.location.href,
	},
};
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MetaMaskUIProvider debug={true} sdkOptions={sdkOptions}>
			<App />
		</MetaMaskUIProvider>
	</React.StrictMode>,
);
