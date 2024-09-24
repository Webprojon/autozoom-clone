import { Link, useParams } from "react-router-dom";
import { MdOutlineDateRange, MdShutterSpeed } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";
import {
	TbAutomaticGearbox,
	TbCar4Wd,
	TbEngine,
	TbUserOff,
} from "react-icons/tb";
import { IoCarSportOutline, IoColorPaletteOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import CarImageGallery from "./Car-Image-Gallery";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../../context/global-context";

export default function CarDetail() {
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState();
	const [periodValue, setPeriodValue] = useState("");
	const [detailsValue, setDetailsValue] = useState("");

	const { data } = useGlobalContext();
	const { id } = useParams();

	// Find correct id and return objects
	const carDetails = data
		.map((info) => info.cars.find((car) => car.id === String(id)))
		.filter(Boolean);

	// Define category and checking its text,
	const defineCategory = (categoryId) => {
		const category = data.find((category) => category.id === categoryId);
		let definedCategory = category ? category.name_en : undefined;

		if (definedCategory && !definedCategory.includes("Cars")) {
			definedCategory += "Cars";
		}
		return definedCategory;
	};

	// Checking active car id
	if (!carDetails) {
		return <p>Car not found</p>;
	}

	// Scrolling to top
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	const sendUserData = (event) => {
		event.preventDefault();

		const token = "6948864577:AAHTh7RO9xCZ6WFKQCle7YqvOnbfcXZIaP4";
		const chat_id = "5850460435";
		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const messageContent = `Ism: ${nameValue} \nTel:  ${phoneValue} \nPeriod: ${periodValue} \nDetails: ${detailsValue}`;

		axios({
			url: url,
			method: "POST",
			data: {
				chat_id: chat_id,
				text: messageContent,
			},
		})
			.then(() => {
				setTimeout(() => {
					setNameValue("");
					setPhoneValue("");
					setPeriodValue("");
					setDetailsValue("");
					alert("Siz sorovingiz muaffaqiyatli yuborildi ");
				}, 500);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const carCards = (car, images) => {
		return (
			<Link to={`/carinfo/${car.id}`} onClick={scrollTop}>
				{images.map((img, index) => {
					return (
						img.is_main && (
							<section key={index} className="flex items-center h-[200px]">
								<img
									alt="selected car img"
									className="mx-auto w-[210px]"
									src={`https://api.autozoomrental.com/api/uploads/images/${img.image.src}`}
								/>
							</section>
						)
					);
				})}

				<article className="mt-14">
					<h3 className="text-[22px] tracking-wider leading-none opacity-95">
						{car.brand.title} {car.model.name}
					</h3>
					<section className="border-t border-zinc-400 my-3 space-x-1">
						<span className="font-bold text-[20px]">
							AED {car.price_in_aed}
						</span>
						<span className="text-[18px] opacity-65">
							/ $ {car.price_in_usd}
						</span>
					</section>
					<span className="opacity-65">per day</span>
				</article>
			</Link>
		);
	};

	return (
		<main className="max-w-[1540px] bg-[#1E1F27]">
			{carDetails?.map((car) => (
				<section
					key={car.id}
					className="pt-10 mx-auto px-6 md:px-0 max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1248px]"
				>
					<section>
						<header>
							<h1 className="leading-none text-white font-bold tracking-wider text-[20px] sm:text-[48px]">
								{car.brand.title} {car.model.name} ({car.color})
							</h1>
						</header>

						<main className="flex flex-col lg:flex-row justify-between mt-10 text-white">
							<section className="lg:w-[700px] space-y-4 no-scrollbar overflow-y-auto cursor-pointer">
								<CarImageGallery images={car.car_images} />

								<article className="flex flex-col gap-y-4">
									<p className="text-[20px] xs:text-[26px] font-bold">
										Good to know about {car.brand.title} {car.model.name} (
										{car.color})
									</p>
									<p className="flex flex-col xs:text-[20px] font-bold sm:mt-4">
										<span className="font-light opacity-70 text-[14px]">
											Kilometrage limit per day
										</span>
										{car.max_speed} KM (Every extra km will be charged 20
										AED/km)
									</p>
									<p className="flex flex-col xs:text-[20px] font-bold">
										<span className="font-light opacity-70 text-[14px]">
											Car rental deposit amount
										</span>
										The deposit is refunded within 28 days
									</p>
								</article>
							</section>

							<section className="lg:w-[500px] text-white">
								<article className="flex justify-between border-stone-400 border-b pb-5 mt-10 md:mt-0">
									<div className="flex flex-col">
										<div>
											<span className="font-bold">AED {car.price_in_aed} </span>
											<span className="font-bold opacity-70">
												/ $ {car.price_in_usd}
											</span>
										</div>
										<span className="opacity-70 text-[14px]">per day</span>
										<span className="font-medium line-through">AED / $</span>
									</div>

									<div className="opacity-70 text-[14px] flex flex-col">
										<span>Deposit</span>
										<span className="mt-8">Premium protection</span>
									</div>

									<div className="flex flex-col">
										<span className="font-bold">AED 0</span>
										<span className="opacity-70 text-[14px]">
											AED 0 for credit cards payment
										</span>
										<span className="font-bold">
											AED {car.price_in_aed_sale ? car.price_in_aed_sale : 0}
										</span>
										<span className="opacity-70 text-[14px]">
											AED {car.price_in_aed_sale ? car.price_in_aed_sale : 0}{" "}
											price for 1 day
										</span>
									</div>
								</article>

								<article className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-5 lg:gap-x-16 gap-y-5 text-[18px] md:px-5 border-stone-400 border-b mt-10 pb-4">
									<div className="flex flex-col items-center gap-y-1">
										<MdOutlineDateRange className="opacity-70 size-6" />
										<span>{car.year}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<MdShutterSpeed className="opacity-70 size-6" />
										<span>{car.seconds}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<SlSpeedometer className="opacity-70 size-6" />
										<span>{car.max_speed}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<TbUserOff className="opacity-70 size-6" />
										<span>{car.max_people}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<IoColorPaletteOutline className="opacity-70 size-6" />
										<span>{car.color}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<TbEngine className="opacity-70 size-6" />
										<span>{car.motor}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<TbAutomaticGearbox className="opacity-70 size-6" />
										<span>{car.transmission}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<TbCar4Wd className="opacity-70 size-6" />
										<span>front</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<BsFuelPump className="opacity-70 size-6" />
										<span>{car.petrol}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<IoCarSportOutline className="opacity-70 size-6" />
										<span>{defineCategory(car.category_id)}</span>
									</div>
								</article>

								<article className="flex justify-center gap-x-10 sm:gap-x-14 lg:gap-x-6 mt-9">
									<a
										target="blank"
										className="px-5 py-3 bg-[#5AEC5A] rounded-[12px]"
										href="https://api.whatsapp.com/send/?phone=971527030189&text&type=phone_number&app_absent=0"
									>
										<FaWhatsapp className="size-8" />
									</a>

									<a
										target="blank"
										href="https://t.me/+971527030189"
										className="px-5 py-3 bg-[#2374F8] rounded-[12px]"
									>
										<FaTelegramPlane className="size-8" />
									</a>

									<a
										target="blank"
										href="tel:971527030189"
										className="px-5 py-3 bg-[#FFB630] rounded-[12px]"
									>
										<LuPhone className="size-8" />
									</a>
								</article>

								<form
									onSubmit={sendUserData}
									className="border mx-auto max-w-[400px] lg:w-[400px] p-10 lg:ml-10 mt-10 flex flex-col gap-y-5"
								>
									<div className="relative">
										<input
											required
											type="text"
											placeholder="Name"
											autoComplete="off"
											value={nameValue}
											onChange={(e) => setNameValue(e.target.value)}
											className="bg-[#69696B] text-gray-300 placeholder:text-gray-300 text-lg w-full p-4 pr-7 border outline-none"
										/>
										<span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-[28px]">
											*
										</span>
									</div>

									<div className="relative">
										<input
											required
											type="tel"
											autoComplete="off"
											placeholder="Phone"
											value={phoneValue}
											onChange={(e) => setPhoneValue(e.target.value)}
											className="bg-[#69696B] text-gray-300 placeholder:text-gray-300 text-lg w-full p-4 pr-7 border outline-none"
										/>
										<span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-[28px]">
											*
										</span>
									</div>

									<input
										type="text"
										autoComplete="off"
										placeholder="Period"
										value={periodValue}
										onChange={(e) => setPeriodValue(e.target.value)}
										className="bg-[#69696B] text-gray-300 placeholder:text-gray-300 text-lg w-full p-4 border outline-none"
									/>
									<input
										type="text"
										placeholder="Details"
										autoComplete="off"
										value={detailsValue}
										onChange={(e) => setDetailsValue(e.target.value)}
										className="bg-[#69696B] text-gray-300 placeholder:text-gray-300 text-lg w-full p-4 border outline-none"
									/>

									<button className="self-start px-8 py-4 text-lg bg-[#FC473E]">
										Send
									</button>
								</form>

								<article className="flex flex-col self-end font-light opacity-70 text-[15px] mt-20">
									<span>The price doesnt include additional 5% VAT.</span>
									<span>
										There is a 3% transaction fee when paying by credit/debit
										card.
									</span>
									<span>
										There is a 7% transaction fee when paying with American
										Express.
									</span>
								</article>
							</section>
						</main>

						<section className="text-white mt-[6rem]">
							<h2 className="uppercase text-[28px] mb-4 leading-none font-semibold tracking-wide">
								Similar Offers
							</h2>
							{data?.map((category) => (
								<section
									key={category.id}
									className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-2"
								>
									{category.cars.map((car) => (
										<div
											key={car.id}
											className="max-w-[400px] w-[100%] mx-auto bg-[#2D2E34] border border-zinc-500 cursor-pointer p-4 text-white rounded-xl"
										>
											{carCards(car, car.car_images)}
										</div>
									))}
								</section>
							))}
						</section>
					</section>
				</section>
			))}
		</main>
	);
}
