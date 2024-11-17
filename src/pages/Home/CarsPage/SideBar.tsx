import { useEffect, useState } from "react";
import { rentOptions } from "../../../lib/hooks";
import { CategoryType } from "../../../lib/types";
import { useGlobalContext } from "../../../context/global-context";

export default function SideBar() {
	const { openFilterOptions } = useGlobalContext();
	const [checkboxCategories, setCheckboxCategories] = useState([]);
	const [checkboxBrands, setCheckboxBrands] = useState([]);
	const [checkboxModels, setCheckboxModels] = useState([]);
	const [selectedModel, setSelectedModel] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedModel(event.target.value);
	};

	useEffect(() => {
		const fetchCheckboxData = async () => {
			try {
				const [categoriesResponse, brandsResponse, modelResponse] =
					await Promise.all([
						fetch(`https://api.autozoomrental.com/api/categories`),
						fetch(`https://api.autozoomrental.com/api/brands`),
						fetch(`https://api.autozoomrental.com/api/models`),
					]);

				const categoriesData = await categoriesResponse.json();
				const brandsData = await brandsResponse.json();
				const modelData = await modelResponse.json();

				setCheckboxCategories(categoriesData.data);
				setCheckboxBrands(brandsData.data);
				setCheckboxModels(modelData.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchCheckboxData();
	}, []);

	return (
		<aside
			className={`bg-[#272933] lg:w-[455px] py-12 px-7
					${openFilterOptions ? "block w-full" : "hidden"} md:block`}
		>
			<h1 className="leading-none text-[27px] font-medium">Filter By</h1>
			<form className="flex flex-col gap-y-3">
				<article>
					<p className="text-[22px] py-3">Offers</p>
					{rentOptions.map((option) => (
						<section key={option.id} className="flex gap-x-3 mb-2 text-lg">
							<input id={option.id} type="checkbox" />
							<label htmlFor={option.id}>{option.label}</label>
						</section>
					))}
				</article>

				<article>
					<p className="text-[22px] py-3">Car type</p>
					{checkboxCategories.map((cartype: CategoryType) => (
						<section key={cartype.id} className="flex gap-x-3 mb-2 text-lg">
							<input id={cartype.id} type="checkbox" />
							<label htmlFor={cartype.id}>{cartype.name_en}</label>
						</section>
					))}
				</article>

				<article>
					<p className="text-[22px] py-3">Brand</p>
					{checkboxBrands.map((brand: CategoryType) => (
						<section key={brand.id} className="flex gap-x-3 mb-2 text-lg">
							<input id={brand.id} type="checkbox" />
							<label htmlFor={brand.id}>{brand.title}</label>
						</section>
					))}
				</article>

				<article>
					<p className="text-[22px] py-3">Model</p>
					<select
						value={selectedModel}
						onChange={handleChange}
						className="text-black w-full outline-none px-4 py-3 rounded-lg no-scrollbar"
					>
						{checkboxModels.map((model: CategoryType) => (
							<option key={model.id} value={model.name}>
								{model.name}
							</option>
						))}
					</select>
				</article>

				<article className="mt-6 flex justify-between">
					<button type="reset" className="border rounded-lg px-12 py-5 text-xl">
						Reset
					</button>
					<button className="bg-[#009A00] rounded-lg px-10 py-5 text-xl">
						Apply filter
					</button>
				</article>
			</form>
		</aside>
	);
}
