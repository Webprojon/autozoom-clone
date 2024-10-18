import { CgChevronRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { scrollTop } from "../../lib/hooks";

export default function Services() {
	// Static data
	const services = [
		{
			id: 1,
			imgSrc:
				"https://www.autozoomrental.com/static/media/sercardimg1.40892caaec9bfa3d404a.jpg",
			title: "Sports Car Rental Dubai Style Tour in Dubai",
			description:
				"Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now!",
		},
		{
			id: 2,
			imgSrc:
				"https://www.autozoomrental.com/static/media/sercardiimg2.79fb9209cbfcc61c8c65.jpg",
			title: "Photoshoot with luxury car rental Dubai",
			description:
				"Professional car photoshoot as an additional type of service at Auto Zoom Car Rental",
		},
	];

	return (
		<main>
			<article className="bg-[#1e1f27] text-white py-8 px-0">
				<section className="max-w-[1248px] mx-auto tracking-wide">
					<h1 className="font-medium text-[30px] leading-none">SERVICES</h1>
					<div className="flex gap-x-8 mt-6">
						{services?.map((service) => (
							<div key={service.title} className="w-[370px]">
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
									LEARN MORE
									<CgChevronRightO className="size-7 group-hover:translate-x-1 transition-all" />
								</Link>
							</div>
						))}
					</div>
				</section>
			</article>
		</main>
	);
}
