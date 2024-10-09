import { Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/global-context";
import Cars from "./pages/Home/CarsPage/Cars-Home";
import CarDetail from "./pages/Home/CarsPage/Cars-info";
import CarsRent from "./pages/Home/CarsPage/Cars-Rent";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import Home from "./pages/Home/HomePage/Home";

function App() {
	return (
		<main className="mx-auto max-w-[1540px]">
			<Provider store={store}>
				<GlobalContextProvider>
					<Header />
					<Home />
					<Routes>
						<Route path="/" element={<Cars />} />
						<Route path="/carinfo/:id" element={<CarDetail />} />
						<Route path="/cars/:id" element={<CarsRent />} />
					</Routes>
				</GlobalContextProvider>
			</Provider>
		</main>
	);
}

export default App;
