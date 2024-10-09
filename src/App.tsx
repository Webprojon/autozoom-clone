import { Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/global-context";
import Cars from "./pages/Home/CarsPage/Cars-Home";
import CarDetail from "./pages/Home/CarsPage/Cars-info";
import CarsRent from "./pages/Home/CarsPage/Cars-Rent";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Brands from "./pages/Home/BrandPage/Brand";
import Header from "./components/Header";

function App() {
	return (
		<main className="mx-auto max-w-[1540px]">
			<Provider store={store}>
				<GlobalContextProvider>
					<Header />
					<Brands />
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