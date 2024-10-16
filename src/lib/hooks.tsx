import { Link } from "react-router-dom";
import { Car, CarImage } from "./types";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

// Scrolling to top
export const scrollTop = () => {
	window.scrollTo({
		top: 0,
	});
};

// Card Data
export const cardDetails = (car: Car, id: string) => {
	return (
		<>
			<Link to={`/carinfo/${id}`} onClick={scrollTop}>
				{car.car_images.map(
					(img: CarImage) =>
						img.is_main && (
							<div key={img.id} className="flex items-center h-[200px]">
								<img
									alt="selected car img"
									className="mx-auto w-[210px]"
									src={`https://api.autozoomrental.com/api/uploads/images/${img.image.src}`}
								/>
							</div>
						),
				)}

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
		</>
	);
};

// Static data
export const rentOptions = [
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
