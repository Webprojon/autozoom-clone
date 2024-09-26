import { Link, useParams } from "react-router-dom";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { useGlobalContext } from "../../../context/global-context";
import { scrollTop } from "../../../lib/hooks";
import { CategoryType } from "../../../lib/types";

export default function CarsRent() {
	const [checkboxCategories, setCheckboxCategories] = useState([]);
	const [checkboxBrands, setCheckboxBrands] = useState([]);
	const [checkboxModels, setCheckboxModels] = useState([]);
	const [selectedModel, setSelectedModel] = useState("");
	const [openFilterOptions, setOpenFilterOptions] = useState(false);
	const { data } = useGlobalContext();
	const { id } = useParams();

	const carData = data.find((item) => item.id === id);

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

	useEffect(() => {
		fetchCheckboxData();
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedModel(event.target.value);
	};

	if (!carData) {
		return <div>Loading...</div>;
	}

	// Static data
	const rentOptions = [
		{ id: "1", label: "3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE" },
		{ id: "2", label: "3 DAYS RENT = 1300 AED🔥 ()" },
		{ id: "3", label: "3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE" },
		{ id: "4", label: "3 DAYS RENT = 1800 AED🔥" },
		{ id: "5", label: "NO DEPOSIT" },
		{ id: "6", label: "5000 AED🔥 ALL INCLUSIVE" },
		{ id: "7", label: "2 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE" },
		{ id: "8", label: "RENT FERRARI DUBAI" },
		{ id: "9", label: "4 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE" },
	];

	{
		/*{data?.map((category) => (
							<div key={category.id} className="flex flex-col gap-y-4">
								{category.cars.map((car) => (
									<div
										key={car.id}
										className="w-[285px] bg-[#2D2E34] border border-zinc-500 cursor-pointer p-2 text-white rounded-xl"
									>
										<Link to={`/carinfo/${car.id}`} onClick={scrollTop}>
											{car.car_images.map((img, index) => {
												return (
													img.is_main && (
														<div
															key={index}
															className="flex items-center h-[200px]"
														>
															<img
																alt="selected car img"
																className="mx-auto w-[210px]"
																src={`https://api.autozoomrental.com/api/uploads/images/${img.image.src}`}
															/>
														</div>
													)
												);
											})}

											<div className="mt-14">
												<h3 className="text-[22px] tracking-wider leading-none opacity-95">
													{car.brand.title} {car.model.name}
												</h3>
												<div className="border-t border-zinc-400 my-3 space-x-1">
													<span className="font-bold text-[20px]">
														AED {car.price_in_aed}
													</span>
													<span className="text-[18px] opacity-65">
														/ $ {car.price_in_usd}
													</span>
												</div>
												<span className="opacity-65">per day</span>
											</div>
										</Link>

										<div className="flex justify-between mt-10 font-medium text-lg">
											<button className="py-3 px-2 bg-[#00C600] rounded-xl">
												<a
													target="blank"
													className="flex items-center gap-x-3"
													href="https://api.whatsapp.com/send/?phone=971527030189&text&type=phone_number&app_absent=0"
												>
													<FaWhatsapp className="size-4" />
													WhatsApp
												</a>
											</button>

											<button className="py-3 px-2 bg-[#2727E0] rounded-xl">
												<a
													target="blank"
													href="https://t.me/+971527030189"
													className="flex items-center gap-x-3"
												>
													<FaTelegram className="size-4" />
													Telegram
												</a>
											</button>
										</div>
									</div>
								))}
							</div>
						))}*/
	}

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
						{carData.cars.map((car) => {
							return (
								<div
									key={car.id}
									className="mx-auto w-[100%] bg-[#2D2E34] border border-zinc-600 cursor-pointer p-2 rounded-lg"
								>
									<Link to={`/carinfo/${car.id}`} onClick={scrollTop}>
										{car.car_images.map((img, index) => {
											return (
												img.is_main && (
													<div
														key={index}
														className="flex items-center h-[200px]"
													>
														<img
															alt="selected car img"
															className="mx-auto w-[210px]"
															src={`https://api.autozoomrental.com/api/uploads/images/${img.image.src}`}
														/>
													</div>
												)
											);
										})}

										<article className="mt-14">
											<h3 className="text-[22px] tracking-wider leading-none opacity-95">
												{car.brand.title} {car.model.name}
											</h3>
											<section className="border-t border-zinc-500 my-3 space-x-1">
												<span className="font-bold text-[20px]">
													AED {car.price_in_aed}
												</span>
												<span className="text-[18px] opacity-65">
													/ $ {car.price_in_usd}
												</span>
											</section>
											<span className="opacity-65 text-[15px]">per day</span>
										</article>
									</Link>

									<article className="flex justify-between gap-x-4 mt-10 font-medium text-lg">
										<a
											target="blank"
											className="flex items-center gap-x-3 py-3 px-2 bg-[#00C600] rounded-xl"
											href="https://api.whatsapp.com/send/?phone=971527030189&text&type=phone_number&app_absent=0"
										>
											<FaWhatsapp className="size-4" />
											WhatsApp
										</a>

										<a
											target="blank"
											href="https://t.me/+971527030189"
											className="flex items-center gap-x-3 py-3 px-2 bg-[#2727E0] rounded-xl"
										>
											<FaTelegram className="size-4" />
											Telegram
										</a>
									</article>
								</div>
							);
						})}
					</section>
				</section>
			</section>
		</main>
	);
}
