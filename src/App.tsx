import { GlobalContextProvider } from "./context/global-context";
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
				</GlobalContextProvider>
			</Provider>
		</main>
	);
}

export default App;
