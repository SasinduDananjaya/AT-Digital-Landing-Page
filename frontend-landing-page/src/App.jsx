import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/main.layout";
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<HomeLayout />}>
					<Route path="/" element={<LandingPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;