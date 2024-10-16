import { GlobalContextProvider } from "./context/global-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import Home from "./pages/Home/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import CarDetail from "./pages/Home/CarsPage/Cars-info";
import Cars from "./pages/Home/CarsPage/Cars";
import CarsRent from "./pages/Home/CarsPage/Cars-Rent";
import Footer from "./components/Footer";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";

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
						<Route path="/service" element={<Services />} />
						<Route path="/about_us" element={<About />} />
						{/*<Route path="/terms_and_conditions" element={<TermCondition />} />*/}
					</Routes>
					<Footer />
				</GlobalContextProvider>
			</Provider>
		</main>
	);
}

export default App;
