import { createRoot } from "react-dom/client";
import App from "./Components/App";
import "normalize.css";
import { Provider } from 'react-redux';
import store from "./Redux/store";

const root = document.getElementById("root");

if (!root) {
	throw new Error("root not found");
}

const container = createRoot(root);

container.render(
	<Provider store={store}>
		<App />
	</Provider>
);
