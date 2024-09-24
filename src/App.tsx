import { Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/global-context";
import Cars from "./pages/Home/CarsPage/Cars-Home";
import CarDetail from "./pages/Home/CarsPage/Cars-info";
import CarsRent from "./pages/Home/CarsPage/Cars-Rent";

function App() {
	return (
		<>
			<GlobalContextProvider>
				<Routes>
					<Route path="/" element={<Cars />} />
					<Route path="/carinfo/:id" element={<CarDetail />} />
					<Route path="/cars/:id" element={<CarsRent />} />
				</Routes>
			</GlobalContextProvider>
		</>
	);
}

export default App;
