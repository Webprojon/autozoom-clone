import { CgChevronRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { scrollTop } from "../../lib/hooks";
import { useTranslation } from "react-i18next";

export default function Services() {
	const { t } = useTranslation();

	// Static data
	const services = [
		{
			id: 1,
			imgSrc:
				"https://www.autozoomrental.com/static/media/sercardimg1.40892caaec9bfa3d404a.jpg",
			title: t("service-card1.title"),
			description: t("service-card1.description"),
		},
		{
			id: 2,
			imgSrc:
				"https://www.autozoomrental.com/static/media/sercardiimg2.79fb9209cbfcc61c8c65.jpg",
			title: t("service-card2.title"),
			description: t("service-card2.description"),
		},
	];

	return (
		<main>
			<article className="bg-[#1e1f27] text-white py-8 px-4 lg:px-0">
				<section className="max-w-[1248px] mx-auto tracking-wide">
					<h1 className="font-medium text-[30px] leading-none">
						{t("service")}
					</h1>
					<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
						{services?.map((service) => (
							<div key={service.title} className="lg:w-[370px]">
								<img alt="service img" src={service.imgSrc} />
								<h2 className="my-6 text-[24px] leading-[1.8rem] font-medium">
									{service.title}
								</h2>
								<p className="text-[18px] line-clamp-2">
									{service.description}
								</p>
								<Link
									to={`/service/${service.id}`}
									onClick={scrollTop}
									className="font-medium tracking-wide flex items-center gap-x-2 group mt-4"
								>
									{t("learn-more")}
									<CgChevronRightO className="size-7 group-hover:translate-x-1 transition-all" />
								</Link>
							</div>
						))}
					</section>
				</section>
			</article>
		</main>
	);
}
