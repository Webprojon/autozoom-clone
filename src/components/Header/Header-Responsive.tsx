import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { scrollTop } from "../../lib/hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setIsMenuOpen } from "../../redux/global-slices";

export default function ResponsiveMenu() {
	const { t } = useTranslation();
	const dispatch: AppDispatch = useDispatch();
	const isMenuOpen = useSelector((state: RootState) => state.global.isMenuOpen);

	const handleMenuToggle = () => {
		dispatch(setIsMenuOpen(!isMenuOpen));
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
		<header
			className={`fixed top-0 right-0 transition-transform duration-300 z-[1000] w-full sm:w-[430px] lg:hidden
				${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
		>
			<section className="flex flex-col pl-16 pr-5 pt-9 h-screen tracking-widest text-white bg-[#0B0B0B]">
				<MdOutlineClose
					onClick={handleMenuToggle}
					className="size-10 self-end lg:hidden"
				/>
				<article className="flex flex-col space-y-9 mt-10 text-[23px]">
					{links.map((link) => (
						<Link
							key={link.id}
							to={link.hash}
							onClick={() => {
								handleMenuToggle();
								scrollTop();
							}}
						>
							{link.link}
						</Link>
					))}
					<a href="tel:+971527030189">+971 52 7030189</a>
				</article>
			</section>
		</header>
	);
}
