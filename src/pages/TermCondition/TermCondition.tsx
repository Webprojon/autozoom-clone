import { useTranslation } from "react-i18next";

export default function TermConditiont() {
	const { t } = useTranslation();

	// Static data
	const termsAndConditions = [
		{
			title: t("term1.title"),
			description: t("term1.description"),
		},
		{
			title: t("term2.title"),
			description: t("term2.description"),
		},
		{
			title: t("term3.title"),
			description: t("term3.description"),
		},
		{
			title: t("term4.title"),
			description: t("term4.description"),
		},
		{
			title: t("term5.title"),
			description: t("term5.description"),
		},
	];

	return (
		<main className="bg-[#1E1F27] px-4 lg:px-0">
			<article className="max-w-[1248px] mx-auto text-white py-6">
				<h1 className="mb-4 leading-none text-[22px] sm:text-[29px] font-medium">
					{t("term-h1")}
				</h1>
				<section className="space-y-6">
					<p className="text-[18px] text-gray-200 tracking-tighter lg:text-[17px]">
						{t("term-p")}
					</p>

					{termsAndConditions.map((term) => (
						<section key={term.title}>
							<h2 className="text-[22px] font-bold">{term.title}</h2>
							<p className="text-gray-200 tracking-tighter text-[18px] lg:text-[17px]">
								{term.description}
							</p>
						</section>
					))}
				</section>
			</article>
		</main>
	);
}
