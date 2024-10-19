import { Link } from "react-router-dom";
import { scrollTop } from "../../lib/hooks";
import { useTranslation } from "react-i18next";

export default function NotFound() {
	const { t } = useTranslation();

	return (
		<main className="bg-[#111219] h-screen fixed left-0 right-0 top-0 z-30">
			<article className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-7 w-[580px] tracking-wide text-center text-white font-medium">
				<span className="text-[110px] leading-none">{t("notfound-span")}</span>
				<h1 className="text-[32px] uppercase">{t("notfound-h1")}</h1>
				<p>{t("notfound-p")}</p>
				<button
					onClick={scrollTop}
					className="uppercase py-3 px-6 font-medium text-[18px] rounded-[14px] transition-all bg-[#FE363B] hover:bg-[#d84447]"
				>
					<Link to="/">{t("notfound-btn")}</Link>
				</button>
			</article>
		</main>
	);
}
