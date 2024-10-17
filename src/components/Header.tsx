import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Brand from "../pages/Brand/Brand";
import { useGlobalContext } from "../context/global-context";
import { useState } from "react";
import { scrollTop } from "../lib/hooks";

export default function Header() {
	const { isHovered, setIsHovered } = useGlobalContext();
	const [activeSection, setActiveSection] = useState("");

	const links = [
		{
			id: 1,
			hash: "/cars",
			link: "Cars",
		},
		{
			id: 2,
			hash: "/",
			link: "Brand",
		},
		{
			id: 3,
			hash: "/service",
			link: "Services",
		},
		{
			id: 4,
			hash: "/about_us",
			link: "About Us",
		},
		{
			id: 5,
			hash: "/contact",
			link: "Contacts",
		},
		{
			id: 6,
			hash: "/blog",
			link: "Blogs",
		},
	];

	const handleClickLink = (link: string) => {
		setActiveSection(link);
		scrollTop();
	};

	return (
		<header className="bg-[#111219] sticky top-0 z-10">
			<nav className="h-[14vh] flex items-center justify-between max-w-[1248px] mx-auto">
				<section className="flex items-center space-x-9">
					<div className="flex space-x-4 cursor-pointer">
						<img
							src="https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg"
							alt="English flag"
							//onClick={() => handleClick("en")}
							className="w-7 hover:scale-105 transition-all custom-shadow rounded-full"
						/>

						<img
							src="https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png"
							alt="Russian flag"
							//onClick={() => handleClick("ru")}
							className="w-7 hover:scale-105 transition-all custom-shadow rounded-full"
						/>
					</div>

					<div className="relative text-white">
						<input
							type="text"
							placeholder="Search..."
							className="header-input-bg w-[320px] bg-[#36373D] py-[12px] pl-[42px] text-[15px] rounded-lg tracking-wider outline-none text-stone-300 placeholder:text-stone-300"
						/>
						<FiSearch className="absolute top-1/2 left-2 -translate-y-1/2 size-6" />
					</div>

					<Link
						to="/"
						onClick={() => {
							scrollTop();
							setActiveSection("");
						}}
					>
						<img
							alt="car rental logo"
							className="w-[100px]"
							src="https://www.autozoomrental.com/static/media/logo1.cd0ee2ea64bdb4e351d6eb2c72171d12.svg"
						/>
					</Link>
				</section>

				<section className="text-white uppercase space-x-10 text-[15px] font-medium tracking-wide">
					{links.map((link) => (
						<Link
							onMouseEnter={() => link.link === "Brand" && setIsHovered(true)}
							onMouseLeave={() => link.link === "Brand" && setIsHovered(false)}
							onClick={() => handleClickLink(link.link)}
							to={link.hash}
							key={link.id}
							className={`
								${
									link.link === "Brand"
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
