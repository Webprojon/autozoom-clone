import { GlobalContextProvider } from "./context/global-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import Home from "./pages/Home/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import CarDetail from "./pages/Home/CarsPage/Cars-info";
import Cars from "./pages/Home/CarsPage/Cars";
import CarsRent from "./pages/Home/CarsPage/Cars-Rent";

function App() {
	return (
		<main className="mx-auto max-w-[1540px]">
			<Provider store={store}>
				<GlobalContextProvider>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cars" element={<Cars />} />
						<Route path="/cars/:id" element={<CarsRent />} />
						<Route path="/carinfo/:id" element={<CarDetail />} />
					</Routes>
				</GlobalContextProvider>
			</Provider>
		</main>
	);
}

export default App;
