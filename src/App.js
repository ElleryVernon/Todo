import React from "react";
import "./App.css";
import Home from "./containers/Home";
import { Toaster } from "sonner";

const App = () => (
	<React.Fragment>
		<Toaster position="top-center" />
		<Home />
	</React.Fragment>
);

export default App;
