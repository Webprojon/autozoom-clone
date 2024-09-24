import React, { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
	// Cars Category
	const [data, setData] = useState([]);
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
	return context;
}
