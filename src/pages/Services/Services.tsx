import { CgChevronRightO } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Services() {
	// Static data
	const services = [
		{
			imgSrc:
				"https://www.autozoomrental.com/static/media/sercardimg1.40892caaec9bfa3d404a.jpg",
			title: "Sports Car Rental Dubai Style Tour in Dubai",
			description:
				"Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now!",
		},
		{
			imgSrc:
				"https://www.autozoomrental.com/static/media/sercardiimg2.79fb9209cbfcc61c8c65.jpg",
			title: "Photoshoot with luxury car rental Dubai",
			description:
				"Professional car photoshoot as an additional type of service at Auto Zoom Car Rental",
		},
	];

	return (
		<main>
			<article className="bg-[#1e1f27] text-white py-10 px-0">
				<section className="max-w-[1248px] mx-auto tracking-wide">
					<h1 className="font-medium text-[30px]">SERVICES</h1>
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
									to="/"
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

			<article className="bg-[#272933] text-white py-10 px-0">
				<section className="max-w-[1248px] mx-auto tracking-wide">
					<span className="font-semibold text-[40px]">
						LUXURY CAR RENTAL IN DUBAI
					</span>
					<p className="my-4 leading-7 text-[18px]">
						Are you ready to feel the adrenaline rush and unleash your inner
						speed demon? Look no further than Auto Zoom luxury car rental Dubai,
						the city where dreams become reality. In this ultimate guide to
						sports car rental Dubai, we will take you on a thrilling journey
						through the world of luxury and supercar rental Dubai. Imagine
						cruising down the iconic Sheikh Zayed Road in a sleek and powerful
						sports car rental Dubai style, turning heads and leaving everyone in
						awe of your style. Whether you are a car enthusiast or simply
						looking to
					</p>

					<span className="font-semibold text-[40px]">
						What are the requirements to rent a luxury car in Dubai?
					</span>
					<p className="my-4 leading-7 text-[18px]">
						To rent a car Dubai, it's enough to have a valid driving license and
						enough funds. & you'll need to show your foreign passport and prove
						that you have come of age and have driving experience.The age limit
						and the requirements for the license depend on where you're from.
						Visitors from Europe, the UK, the US and the Middle East can drive
						with their national licenses. People from other parts of the world
						need an international license. The age limit for the driver might
						vary from 21 to 25 years. Please get in touch with us before placing
						an order to discuss your individual situation.Cars in the UAE have
						steering wheels on the left side. Drivers stick to the right side of
						the road.If needed, you can add a second driver to your rental
						contract. The requirements for this person will be the same as for
						the first driver. If you let someone who isn't mentioned in your
						rental contract take a place behind the wheel, you can get a
						fine.The duration of a premium car rental in Dubai can vary from one
						day to several weeks. Discounts are common for luxury car rental
						Dubai monthly car rental plan. Use this chance to have fun, increase
						your high social status and please your dearest and nearest!Please
						avoid smoking inside the rented vehicle.
					</p>
				</section>
			</article>
		</main>
	);
}
