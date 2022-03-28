import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<main className="py-3">
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
					</Routes>
					<Routes>
						<Route
							path="/properties"
							element={<PropertiesPage />}
						></Route>
					</Routes>
				</main>
				<Footer />
			</Router>
			<ToastContainer />
		</>
	);
};

export default App;
