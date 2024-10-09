import {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";
import { CategoryType } from "../lib/types";

export interface GlobalContextType {
	data: CategoryType[];
	setData: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
	children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalProviderProps> = ({
	children,
}) => {
	// Cars Category
	const [data, setData] = useState<CategoryType[]>([]);

	useEffect(() => {
		fetch("https://api.autozoomrental.com/api/cars/category")
			.then((response) => response.json())
			.then((data) => setData(data.data));
	}, []);

	return (
		<GlobalContext.Provider value={{ data, setData }}>
			{children}
		</GlobalContext.Provider>
	);
};

export function useGlobalContext() {
	const context = useContext(GlobalContext);

	if (!context) {
		throw new Error(
			"useGlobalContext must be used within a GlobalContextProvider",
		);
	}

	return context;
}