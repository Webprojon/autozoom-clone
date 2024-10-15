import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/global-context";
import { useEffect, useState } from "react";
import { CategoryType } from "../../../lib/types";
import { VscSettings } from "react-icons/vsc";
import { cardDetails, rentOptions } from "../../../lib/hooks";

export default function Cars() {
	const [checkboxCategories, setCheckboxCategories] = useState([]);
	const [checkboxBrands, setCheckboxBrands] = useState([]);
	const [checkboxModels, setCheckboxModels] = useState([]);
	const [selectedModel, setSelectedModel] = useState("");
	const [openFilterOptions, setOpenFilterOptions] = useState(false);
	const { data } = useGlobalContext();

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

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedModel(event.target.value);
	};

	// Reduce car data
	const carsData = data.map((items) => {
		return items.cars.map((item) => {
			return item;
		});
	});

	const reducedCars = carsData.reduce((acc, item) => {
		return acc.concat(item);
	}, []);

	return (
		<main className="max-w-[1540px] bg-[#1E1F27] tracking-wide">
			<section className="text-white flex gap-x-6">
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
							<button
								type="reset"
								className="border rounded-lg px-12 py-5 text-xl"
							>
								Reset
							</button>
							<button className="bg-[#009A00] rounded-lg px-10 py-5 text-xl">
								Apply filter
							</button>
						</article>
					</form>
				</aside>

				<section
					className={`pt-10 px-4 xs:px-0 mx-auto lg:mx-0 max-w-[400px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1248px]
						${openFilterOptions ? "hidden" : "block"}`}
				>
					<div
						onClick={() => setOpenFilterOptions(!openFilterOptions)}
						className="my-5 rounded-md flex md:hidden justify-center items-center bg-[#2D2E34] w-14 h-12"
					>
						<VscSettings className="size-7" />
					</div>

					<Link to="/" className="opacity-70 text-[15px]">
						Luxury Cars for Rent in Dubai / Hire the latest supercar
					</Link>

					<section className="mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{reducedCars.map((car) => (
							<section
								key={car.id}
								className="max-w-[400px] w-[100%] mx-auto bg-[#2D2E34] border border-zinc-500 cursor-pointer p-4 text-white rounded-xl"
							>
								{cardDetails(car, car.id)}
							</section>
						))}
					</section>
				</section>
			</section>
		</main>
	);
}
