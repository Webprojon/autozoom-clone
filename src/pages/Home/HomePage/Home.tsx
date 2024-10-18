import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { CgChevronRightO } from "react-icons/cg";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { CategoryType } from "../../../lib/types";
import { Link } from "react-router-dom";
import FAQPage from "../FAQPage/FAQ";
import Services from "../../Services/Services";
import CarsHome from "../CarsPage/Cars-Home";
import { scrollTop } from "../../../lib/hooks";
import Rules from "../Rules/Rules";

export default function Home() {
	const [brands, setBrands] = useState([]);

	const handleSwiperInit = (swiper: SwiperClass) => {
		swiper.on("slideChange", () => {
			if (swiper.isEnd) {
				swiper.autoplay.stop();
			}
		});
	};

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
		<>
			<main id="reviews" className="home-bg flex flex-col items-center">
				<section className="text-white tracking-wide w-[680px] mt-10 flex flex-col items-center justify-center text-center">
					<h1 className="text-[44px] font-medium font-serif leading-[3.5rem] tracking-widest">
						TOP LUXURY CAR <br /> RENTAL DUBAI
					</h1>
					<p className="text-zinc-300 text-lg pt-2">
						Best sports car & supercar rental Dubai, Exclusive offers on luxury
						car rental Dubai Cheap price
					</p>

					<div className="font-medium flex items-center space-x-3 mt-6 text-[20px] cursor-pointer group">
						<span onClick={() => location.reload()}>
							RENT A CAR DUBAI CATALOG
						</span>
						<CgChevronRightO className="size-7 group-hover:translate-x-1 transition-all" />
					</div>
				</section>

				<article className="h-[55vh] mt-16 w-[1500px] flex justify-center items-center">
					<Swiper
						effect={"coverflow"}
						centeredSlides={true}
						loop={true}
						spaceBetween={800}
						slidesPerView={"auto"}
						modules={[EffectCoverflow, Autoplay]}
						onInit={handleSwiperInit}
						autoplay={{
							delay: 4500,
							disableOnInteraction: false,
						}}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 200,
							modifier: 5,
						}}
					>
						<SwiperSlide className="w-[700px]">
							<Link to="/cars">
								<img
									alt="slide_image"
									src="https://www.autozoomrental.com/static/media/xUnlimited-mileage.png.pagespeed.ic.cCWSKu-GPp.896ca2cf44c5787d1898.png"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide className="w-[700px]">
							<Link to="/cars">
								<img
									alt="slide_image"
									src="https://www.autozoomrental.com/static/media/audi.c4adb12ac6dec846adc3.png"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide className="w-[700px]">
							<Link to="/cars">
								<img
									alt="slide_image"
									src="https://www.autozoomrental.com/static/media/mersedez.efa884d1c86e12f4fb0f.png"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide className="w-[700px]">
							<Link to="/cars">
								<img
									alt="slide_image"
									src="https://www.autozoomrental.com/static/media/rolsroys.500642b0161c40ebfcdc.png"
								/>
							</Link>
						</SwiperSlide>
					</Swiper>
				</article>

				<Marquee className="my-10 max-w-[1248px] mx-auto">
					<article className="text-white max-w-[1248px] mx-auto">
						<section>
							<Swiper slidesPerView={7}>
								{brands.map((brand: CategoryType) => (
									<SwiperSlide key={brand.id}>
										<Link
											to={`cars/${brand.id}`}
											onClick={scrollTop}
											className="flex flex-col justify-center items-center"
										>
											<img
												alt={brand.title}
												className="object-cover h-[10vh]"
												src={`https://api.autozoomrental.com/api/uploads/images/${brand.image_src}`}
											/>
											<span className="font-bold opacity-70">
												{brand.title}
											</span>
										</Link>
									</SwiperSlide>
								))}
							</Swiper>
						</section>
					</article>
				</Marquee>
			</main>

			<CarsHome />
			<Services />
			<Rules />
			<FAQPage />
		</>
	);
}
