import { IoCheckbox } from "react-icons/io5";
import { useParams } from "react-router-dom";

interface Package {
	id: number;
	imgSrc: string;
	type: string;
	price: string;
	people: string;
	description: string;
	includes: string[];
}

interface BlogDetail {
	id: number;
	packages: Package[];
}

export default function ServiceDetail() {
	const { id } = useParams();

	// Static data
	const blogDetails: BlogDetail[] = [
		{
			id: 1,
			packages: [
				{
					id: 1,
					imgSrc:
						"https://starrluxurycars.com/wp-content/uploads/2023/05/SLC-rolls-royce-ghost-dubai-united-arab-emirates-burj-khalifa-umm-suqeim-beach-hire-starr-luxury-cars.feel-the-experience-1.jpg",
					type: "Basic Package",
					price: "1000",
					people: "one person",
					description:
						"Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
					includes: [
						"Premium Transfer to camp",
						"Dune Buggy riding 1.5 hours",
						"Cuadro 15 min",
						"Falcone shoting",
						"Camel",
						"VIP room",
						"Fruits, Drinks, BBQ",
					],
				},
				{
					id: 2,
					imgSrc:
						"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/57/f5/af.jpg",
					type: "Premium Package",
					price: "2000",
					people: "two person",
					description:
						"1asasa2334343434Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
					includes: [
						"Premium Transfer to camp",
						"Dune Buggy riding 1.5 hours",
						"Cuadro 15 min",
						"Falcone shoting",
						"Camel",
						"VIP room",
						"Fruits, Drinks, BBQ",
					],
				},
				{
					id: 3,
					imgSrc:
						"https://k-auto.studio.crasman.cloud/pub/vehicles/FOT/FOT-699/bf7a8c3425d1da1_FOT-699.jpg?c=system_x1080",
					type: "Pro Package",
					price: "3000",
					people: "three person",
					description:
						"121212334343434Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
					includes: [
						"Premium Transfer to camp",
						"Dune Buggy riding 1.5 hours",
						"Cuadro 15 min",
						"Falcone shoting",
						"Camel",
						"VIP room",
						"Fruits, Drinks, BBQ",
					],
				},
			],
		},
		{
			id: 2,
			packages: [
				{
					id: 1,
					imgSrc:
						"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/57/f5/af.jpg",
					type: "Basic Package",
					price: "232323",
					people: "one person",
					description:
						"121212334343434Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
					includes: [
						"Premium Transfer to camp",
						"Dune Buggy riding 1.5 hours",
						"Cuadro 15 min",
						"Falcone shoting",
						"Camel",
						"VIP room",
						"Fruits, Drinks, BBQ",
					],
				},
				{
					id: 2,
					imgSrc:
						"https://media2.autokopen.nl/afbeeldingen/mercedes-amg-gt-4-door-coupe-297357-1920.jpg",
					type: "Premium Package",
					price: "232323",
					people: "two person",
					description:
						"1asasa2334343434Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
					includes: [
						"Premium Transfer to camp",
						"Dune Buggy riding 1.5 hours",
						"Cuadro 15 min",
						"Falcone shoting",
						"Camel",
						"VIP room",
						"Fruits, Drinks, BBQ",
					],
				},
			],
		},
	];

	const details = blogDetails.find((item) => item.id == Number(id));

	if (!details) {
		return (
			<section className="bg-[#1E1F27] h-[50vh]">
				<p className="text-center pt-[7rem] text-white text-[35px] font-medium">
					Not found such items 🤷‍♂️
				</p>
			</section>
		);
	}

	return (
		<main className="bg-[#1E1F27]">
			<section className="w-[1248px] mx-auto text-white py-8 tracking-wide">
				<h1 className="text-[29px] font-medium leading-none mb-8">
					Sports Car Rental Dubai Style Tour in Dubai
				</h1>

				<section className="grid grid-cols-3 gap-x-14">
					{details?.packages?.map((detail) => (
						<article key={detail.id} className="w-[400px]">
							<img
								alt="Tour Image"
								src={detail.imgSrc}
								className="rounded-t-lg h-[40vh] w-[100%]"
							/>
							<div className="bg-[#2D2E34] pt-3 px-5 pb-6 rounded-b-lg">
								<h2 className="text-[25px] font-medium leading-none">
									{detail.type}
								</h2>
								<div className="flex justify-between items-center capitalize my-6">
									<span className="border-2 border-green-400 px-6 rounded-lg text-[20px]">
										{detail.price}
									</span>
									<span>{detail.people}</span>
								</div>
								<p className="line-clamp-3 font-medium text-[17px]">
									{detail.description}
								</p>
								<h3 className="font-medium text-[24px] my-4">
									Package Inclusions:
								</h3>
								<ul className="mb-6 space-y-4">
									{detail.includes.map((include, index) => (
										<li
											key={index}
											className="flex items-center gap-x-3 text-[17px] font-medium"
										>
											<IoCheckbox className="size-7" />
											{include}
										</li>
									))}
								</ul>
								<button className="w-[100%] uppercase py-4 px-6 font-medium text-[20px] rounded-lg transition-all bg-[#FE363B] hover:bg-[#d84447]">
									<a href="tel:+971527030189">Book Now</a>
								</button>
							</div>
						</article>
					))}
				</section>
			</section>
		</main>
	);
}
