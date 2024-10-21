import { useTranslation } from "react-i18next";

export default function About() {
	const { t } = useTranslation();

	return (
		<main className="bg-about-img text-white border-b-2 px-4 lg:px-0">
			<article className="py-10 space-y-4 sm:space-y-8 max-w-[1248px] mx-auto tracking-wide">
				<header>
					<h1 className="leading-none font-semibold text-[30px] uppercase">
						{t("about-us")}
					</h1>
				</header>

				<section className="text-[18px]">
					<h2 className="font-medium text-[20px] sm:text-[26px] leading-8">
						{t("about-h2")}
					</h2>
					<p className="mt-4">{t("about-p1")}</p>
				</section>

				<section className="space-y-5 text-[18px]">
					<h2 className="font-medium text-[20px] sm:text-[28px]">
						{t("about-h3")}
					</h2>
					<p>
						<strong>{t("about-p2-strong")}</strong> {t("about-p2")}
					</p>
					<p>
						<strong>{t("about-p3-strong")}</strong> {t("about-p3")}
					</p>
					<p>
						<strong>{t("about-p4-strong")}</strong> {t("about-p4")}
					</p>
					<p>
						<strong>{t("about-p5-strong")}</strong> {t("about-p5")}
					</p>
				</section>

				<section className="space-y-5 text-[18px]">
					<h2 className="font-medium text-[20px] sm:text-[28px]">
						{t("about-h4")}
					</h2>
					<p>{t("about-p6")}</p>
					<h2 className="font-medium text-[20px] sm:text-[28px]">
						{t("about-h5")}
					</h2>
					<p>{t("about-p7")}</p>
				</section>
			</article>
		</main>
	);
}
