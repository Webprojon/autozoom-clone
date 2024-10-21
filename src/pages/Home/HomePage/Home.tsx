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
import { useTranslation } from "react-i18next";

export default function Home() {
	const [brands, setBrands] = useState([]);
	const { t } = useTranslation();

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

	const slideImgs = [
		"https://www.autozoomrental.com/static/media/xUnlimited-mileage.png.pagespeed.ic.cCWSKu-GPp.896ca2cf44c5787d1898.png",
		"https://www.autozoomrental.com/static/media/audi.c4adb12ac6dec846adc3.png",
		"https://www.autozoomrental.com/static/media/mersedez.efa884d1c86e12f4fb0f.png",
		"https://www.autozoomrental.com/static/media/rolsroys.500642b0161c40ebfcdc.png",
	];

	return (
		<main>
			<section id="reviews" className="home-bg flex flex-col items-center">
				<section className="mx-4 lg:mx-0 text-white tracking-wide lg:w-[680px] mt-10 flex flex-col items-center justify-center text-center">
					<h1 className="lg:w-[560px] font-medium font-serif leading-8 sm:leading-[3.5rem] tracking-widest text-[20px] sm:text-[44px]">
						{t("home-h1")}
					</h1>
					<p className="text-zinc-300 sm:text-[20px] pt-2">{t("home-p")}</p>

					<div className="font-medium flex items-center space-x-3 mt-6 sm:text-[20px] cursor-pointer group">
						<span onClick={() => location.reload()}>{t("home-span")}</span>
						<CgChevronRightO className="size-7 group-hover:translate-x-1 transition-all" />
					</div>
				</section>

				<Swiper
					className="mt-16 w-full"
					effect={"coverflow"}
					centeredSlides={true}
					loop={true}
					spaceBetween={800}
					slidesPerView={"auto"}
					modules={[EffectCoverflow, Autoplay]}
					onInit={handleSwiperInit}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 200,
						modifier: 5,
					}}
				>
					{slideImgs.map((img, index) => (
						<SwiperSlide key={index} className="lg:w-[700px]">
							<Link to="/cars">
								<img alt="slide_image" src={img} />
							</Link>
						</SwiperSlide>
					))}
				</Swiper>

				<Marquee className="my-14 max-w-[1248px] mx-auto">
					<article className="text-white max-w-[1248px] mx-auto">
						<section>
							<Swiper slidesPerView={8}>
								{brands.map((brand: CategoryType) => (
									<SwiperSlide key={brand.id}>
										<Link
											to={`cars/${brand.id}`}
											onClick={scrollTop}
											className="flex flex-col justify-center items-center"
										>
											<img
												alt={brand.title}
												className="object-cover h-[7vh] lg:h-[10vh]"
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
			</section>

			<CarsHome />
			<Services />
			<Rules />
			<FAQPage />
		</main>
	);
}
