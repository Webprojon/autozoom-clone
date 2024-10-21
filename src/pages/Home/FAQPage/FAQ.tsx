import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CgChevronDownO, CgChevronRightO } from "react-icons/cg";

export default function FAQPage() {
	const [toggle, setToggle] = useState<number | null>(null);
	const { t } = useTranslation();

	const handleToggle = (id: number | null) => {
		setToggle((prev) => (prev === id ? null : id));
	};

	// Static Data
	const faqs = [
		{
			id: 1,
			question: t("faq1.question"),
			answer: t("faq1.answer"),
		},
		{
			id: 2,
			question: t("faq2.question"),
			answer: t("faq2.answer"),
		},
		{
			id: 3,
			question: t("faq3.question"),
			answer: t("faq3.answer"),
		},
		{
			id: 4,
			question: t("faq4.question"),
			answer: t("faq4.answer"),
		},
		{
			id: 5,
			question: t("faq5.question"),
			answer: t("faq5.answer"),
		},
	];
	return (
		<main className="bg-[#1E1F27] px-4 lg:px-0">
			<article className="max-w-[1248px] mx-auto text-white tracking-wider">
				<h1 className="font-medium text-[30px] py-6">{t("faq")}</h1>
				<section className="h-[70vh] flex flex-col gap-y-10 lg:mt-6 md:mt-0">
					{faqs.map(({ id, question, answer }) => (
						<div key={id} className="lg:w-[900px]">
							<div className="border-b border-gray-600">
								<div className="group flex items-center gap-x-5 pb-2 lg:mb-2">
									<div onClick={() => handleToggle(id)}>
										{toggle === id ? (
											<CgChevronDownO className="size-7" />
										) : (
											<CgChevronRightO className="size-7" />
										)}
									</div>

									<h2
										onClick={() => handleToggle(id)}
										className="cursor-pointer text-md sm:text-lg"
									>
										{question}
									</h2>
								</div>

								<div
									className={`overflow-hidden transition-max-height duration-500 ease-in-out 
										${toggle === id ? "max-h-screen" : "max-h-0"}`}
								>
									<p className="bg-[#272933] mb-2 py-2 px-4 text-md sm:text-lg">
										{answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</section>
			</article>
		</main>
	);
}
