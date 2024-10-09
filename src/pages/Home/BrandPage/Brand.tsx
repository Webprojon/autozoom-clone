import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryType } from "../../../lib/types";
import axios from "axios";
import Marquee from "react-fast-marquee";

export default function Brands() {
	const [brands, setBrands] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://api.autozoomrental.com/api/brands",
				);
				setBrands(response.data.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<main className="bg-[#1E1F27]">
			<Marquee className="max-w-[1248px] mx-auto">
				<article className="text-white max-w-[1248px] mx-auto">
					<section>
						<Swiper
							//spaceBetween={50}
							//pagination={{ clickable: true }}
							slidesPerView={7}
						>
							{brands.map((brand: CategoryType) => (
								<SwiperSlide>
									<Link
										to={`cars/${brand.id}model`}
										className="flex flex-col justify-center items-center"
									>
										<img
											alt={brand.title}
											className="object-cover h-[10vh]"
											src={`https://api.autozoomrental.com/api/uploads/images/${brand.image_src}`}
										/>
										<span className="font-bold opacity-70">{brand.title}</span>
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</section>
				</article>
			</Marquee>
		</main>
	);
}
