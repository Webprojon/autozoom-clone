import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scrollTop } from "../lib/hooks";
import { CategoryType } from "../lib/types";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCarData = async () => {
			try {
				const response = await axios.get(
					"https://api.autozoomrental.com/api/categories",
				);
				setCategories(response.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCarData();
	}, []);

	return (
		<footer className="h-[70vh] pt-12 bg-[#111219] text-white">
			<main className="flex justify-between w-[1248px] mx-auto tracking-wide">
				<aside className="space-y-8 w-[280px]">
					<Link to="/">
						<img
							alt="logo"
							className="w-[110px]"
							src="https://www.autozoomrental.com/static/media/logo1.cd0ee2ea64bdb4e351d6eb2c72171d12.svg"
						/>
					</Link>
					<h1 className="font-bold text-[30px] leading-9">
						LUXURY CAR RENTAL IN DUBAI
					</h1>
					<p className="text-gray-400">
						Rent sports and luxury cars directly without intermediaries. Rent a
						car in Dubai with Auto Zoom Car Rental - safety and driving pleasure
					</p>
					<button className="uppercase py-5 px-9 font-medium text-[18px] border rounded-[14px] transition-all hover:bg-[#FE363B] hover:border-none">
						get best offer
					</button>
				</aside>

				<section className="w-[850px]">
					<article className="flex justify-between">
						<section className="flex flex-col gap-y-3" onClick={scrollTop}>
							<Link to="/cars" className="text-[20px] uppercase">
								Cars
							</Link>
							{categories.map((category: CategoryType) => (
								<Link to={`cars/${category.id}`} className="text-gray-400">
									{category.name_en}
								</Link>
							))}
						</section>

						<section>
							<div className="uppercase flex flex-col gap-y-3 text-[19px]">
								<Link to="/blog">Blog</Link>
								<Link to="/services">Services</Link>
								<Link to="/about_us">About Us</Link>
								<Link to="/contacts">Contacts</Link>
							</div>
							<p className="text-[15px] mt-3 text-gray-400">
								Elite 3 Sports City, Dubai 26W8 24J, <br /> United Arab Emirates
								<br /> +971 52 7030189
								<br />
								Working hours: 24/7
							</p>
						</section>

						<section>
							<span className="text-[19px]">Follow Us</span>
							<div className="flex gap-x-3 mt-3 text-gray-400">
								<a
									href="https://www.instagram.com/autozoomrental/"
									target="blank"
								>
									<FaInstagram className="size-6" />
								</a>
								<a
									href="https://www.instagram.com/autozoomrental/"
									target="blank"
								>
									<FaFacebook className="size-5" />
								</a>
								<a
									href="https://www.instagram.com/autozoomrental/"
									target="blank"
								>
									<FaYoutube className="size-6" />
								</a>
							</div>
						</section>
					</article>

					<article className="text-gray-400 text-[15px] flex justify-between items-center mt-10 py-6 border-t border-gray-500">
						<p>
							© 2024 Auto Zoom Car Rental. <br /> United Arab Emirates.
						</p>
						<Link to="/terms_and_conditions">Terms and Conditions</Link>
					</article>
				</section>
			</main>
		</footer>
	);
}
