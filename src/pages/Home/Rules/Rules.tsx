import { useTranslation } from "react-i18next";

export default function Rules() {
	const { t } = useTranslation();
	return (
		<main>
			<article className="bg-[#272933] text-white py-8 lg:py-10 px-4 lg:px-0">
				<section className="max-w-[1248px] mx-auto tracking-wide">
					<h1 className="font-semibold text-[25px] leading-9 lg:text-[40px]">
						{t("rule-h1")}
					</h1>
					<p className="my-4 leading-7 text-[18px]">{t("rule-p1")}</p>

					<h2 className="font-semibold text-[25px] uppercase leading-9 lg:text-[40px]">
						{t("rule-h2")}
					</h2>
					<p className="my-4 leading-7 text-[18px]">{t("rule-p")}</p>
				</section>
			</article>
		</main>
	);
}
