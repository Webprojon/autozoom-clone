import { Link } from "react-router-dom";
import Brand from "../pages/Brand/Brand";
import { useGlobalContext } from "../context/global-context";
import { useEffect, useState } from "react";
import { scrollTop } from "../lib/hooks";
import HeaderInput from "./Header-Input";
import { useTranslation } from "react-i18next";

export default function Header() {
	const { isHovered, setIsHovered } = useGlobalContext();
	const [activeSection, setActiveSection] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState("");
	const { i18n } = useTranslation();
	const { t } = useTranslation();

	useEffect(() => {
		const initialLanguage =
			typeof window !== "undefined"
				? localStorage.getItem("i18nextLng") || "en"
				: "en";
		setSelectedLanguage(initialLanguage);
	}, []);

	const handleClickLang = (language: string) => {
		console.log(selectedLanguage);
		setSelectedLanguage(language);
		i18n.changeLanguage(language);
		localStorage.setItem("i18nextLng", language);
	};

	const handleClickLink = (link: string) => {
		setActiveSection(link);
		scrollTop();
	};

	const handleClick = () => {
		scrollTop();
		setActiveSection("");
	};

	const handleEvents = (link: string, which: boolean) => {
		if (link == "Brand" || link == "БРЕНД") {
			setIsHovered(which);
		}
	};

	// Static Links
	const links = [
		{
			id: 1,
			hash: "/cars",
			link: t("link1"),
		},
		{
			id: 2,
			hash: "/",
			link: t("link2"),
		},
		{
			id: 3,
			hash: "/service",
			link: t("link3"),
		},
		{
			id: 4,
			hash: "/about_us",
			link: t("link4"),
		},
		{
			id: 5,
			hash: "/contact",
			link: t("link5"),
		},
		{
			id: 6,
			hash: "/blog",
			link: t("link6"),
		},
	];

	return (
		<header className="bg-[#111219] sticky top-0 z-10">
			<nav className="h-[14vh] flex items-center justify-between max-w-[1248px] mx-auto">
				<section className="flex items-center space-x-9">
					<div className="flex space-x-4 cursor-pointer">
						<img
							src="https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg"
							alt="English flag"
							onClick={() => handleClickLang("en")}
							className="w-7 hover:scale-105 transition-all custom-shadow rounded-full"
						/>

						<img
							src="https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png"
							alt="Russian flag"
							onClick={() => handleClickLang("ru")}
							className="w-7 hover:scale-105 transition-all custom-shadow rounded-full"
						/>
					</div>

					<HeaderInput />

					<Link to="/" onClick={handleClick}>
						<img
							alt="car rental logo"
							className="w-[100px]"
							src="https://www.autozoomrental.com/static/media/logo1.cd0ee2ea64bdb4e351d6eb2c72171d12.svg"
						/>
					</Link>
				</section>

				<section className="text-white uppercase space-x-10 font-medium tracking-wide">
					{links.map((link) => (
						<Link
							onMouseEnter={() => handleEvents(link.link, true)}
							onMouseLeave={() => handleEvents(link.link, false)}
							onClick={() => handleClickLink(link.link)}
							to={link.hash}
							key={link.id}
							className={`
								${
									link.link === "Brand" || link.link === "БРЕНД"
										? "pb-5 border-none"
										: `hover:border-b-2 border-red-500 pb-1
										 ${activeSection === link.link ? "border-b-2 border-red-500 pb-1" : ""}`
								}  
								`}
						>
							{link.link}
						</Link>
					))}
				</section>
			</nav>

			{isHovered && <Brand />}
		</header>
	);
}
