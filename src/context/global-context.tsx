import {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";
import { CategoryType } from "../lib/types";
import axios from "axios";

export interface GlobalContextType {
	data: CategoryType[];
	setData: React.Dispatch<React.SetStateAction<CategoryType[]>>;
	isHovered: boolean;
	setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
	openFilterOptions: boolean;
	setOpenFilterOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
	children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalProviderProps> = ({
	children,
}) => {
	// Cars Category
	const [openFilterOptions, setOpenFilterOptions] = useState(false);
	const [data, setData] = useState<CategoryType[]>([]);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://api.autozoomrental.com/api/cars/category",
			);
			setData(response.data.data);
		};

		fetchData();
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				data,
				setData,
				isHovered,
				setIsHovered,
				openFilterOptions,
				setOpenFilterOptions,
			}}
		>
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
