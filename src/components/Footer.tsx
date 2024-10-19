import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scrollTop } from "../lib/hooks";
import { CategoryType } from "../lib/types";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const [categories, setCategories] = useState([]);
	const { t } = useTranslation();

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

	const language =
		typeof window !== "undefined"
			? localStorage.getItem("i18nextLng") || "en"
			: "en";

	return (
		<footer className="bg-[#111219] text-white">
			<main className="py-10 flex justify-between w-[1248px] mx-auto tracking-wide">
				<aside className="space-y-8 w-[280px]">
					<Link to="/" onClick={scrollTop}>
						<img
							alt="logo"
							className="w-[110px]"
							src="https://www.autozoomrental.com/static/media/logo1.cd0ee2ea64bdb4e351d6eb2c72171d12.svg"
						/>
					</Link>
					<h1 className="font-bold text-[30px] leading-9">{t("footer-h1")}</h1>
					<p className="text-gray-400">{t("footer-p")}</p>
					<button
						onClick={scrollTop}
						className="uppercase py-5 px-9 font-medium text-[18px] border rounded-[14px] transition-all hover:bg-[#FE363B] hover:border-none"
					>
						<Link to="/cars">{t("footer-btn")}</Link>
					</button>
				</aside>

				<section className="w-[850px]">
					<article className="flex justify-between">
						<section className="flex flex-col gap-y-3" onClick={scrollTop}>
							<Link to="/cars" className="text-[18px] uppercase">
								{t("link1")}
							</Link>
							{categories.map((category: CategoryType) => (
								<Link
									key={category.id}
									to={`cars/${category.id}`}
									className="text-gray-400"
								>
									{language === "ru" ? category.name_ru : category.name_en}
								</Link>
							))}
						</section>

						<section>
							<div
								className="uppercase flex flex-col gap-y-3 text-[18px]"
								onClick={scrollTop}
							>
								<Link to="/blog">{t("link6")}</Link>
								<Link to="/service">{t("link3")}</Link>
								<Link to="/about_us">{t("link4")}</Link>
								<Link to="/contact">{t("link5")}</Link>
							</div>

							<div className="text-[15px] mt-3 text-gray-400">
								<p>
									{t("footer-detail-p1-br")} <br /> {t("footer-detail-p1")}
								</p>
								<p>+971 52 7030189</p>
								<p>{t("footer-detail-p2")}</p>
							</div>
						</section>

						<section>
							<span className="text-[18px] uppercase">
								{t("footer-follow")}
							</span>
							<div className="flex gap-x-3 mt-3 text-gray-400">
								<a
									href="https://www.instagram.com/autozoomrental/"
									target="blank"
								>
									<FaInstagram className="size-7" />
								</a>
								<a
									href="https://www.instagram.com/autozoomrental/"
									target="blank"
								>
									<FaFacebook className="size-6" />
								</a>
								<a
									href="https://www.instagram.com/autozoomrental/"
									target="blank"
								>
									<FaYoutube className="size-7" />
								</a>
							</div>
						</section>
					</article>

					<article className="text-gray-400 text-[15px] flex justify-between items-center mt-10 py-6 border-t border-gray-500">
						<p>
							{t("footer-term")} <br /> {t("footer-detail-p1")}
						</p>
						<Link to="/terms_and_conditions" onClick={scrollTop}>
							{t("footer-term2")}
						</Link>
					</article>
				</section>
			</main>
		</footer>
	);
}
