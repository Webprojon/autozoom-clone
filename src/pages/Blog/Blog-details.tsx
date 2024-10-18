import { useParams } from "react-router-dom";

export default function BlogDetails() {
	const { id } = useParams();

	// Static data
	const blogDetails = [
		{
			id: 1,
			title: "TOP 3 DESTINATIONS TO VISIT FROM DUBAI IN A RENTAL CAR",
			firstDescription:
				"One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure. All the roads and carriageways are constantly maintained and looked after, and their excellent condition is the result of a special government program.This is why driving from Dubai to far away destinations seems so exciting and thrilling! And if you are fond of new experiences and adventure, your Dubai holiday will not be complete without visiting a few fascinating UAU districts.",
			nameOfPlace: "Abu-Dhabi",
			imgSrc:
				"https://www.autozoomrental.com/static/media/dubaiLambo.cff1a7f88b84058682a4.jpg",
			secondDescription:
				"If the combination of adventure and history is one of your personal weaknesses, then Hatta should never be off your list of primary destinations. A journey that takes only a couple of hours will bring you to a noticeably cooler mountainous climate. Thanks to its high-altitude location among the beautiful Hajar Mountains, the sense of space and release you will feel here after the suffocating heat of Dubai is what you really need for a change and fresh impressions.This trip will broaden your Emirates experience as it lets you to explore an absolutely different area with remarkable features that include, but not limit to the greenness of the vast Wadi Hatta Park, the enormity of the world's largest inclined mural, the birdlife diversity of the Swan Lake, and a grand spaciousness of Hatta Dam offering everyone to take an active part in various watersport experiences. It would be a gorgeous bonus if you try to extend your visit with an overnight stay in one of the Hatta hotels, motels, and resorts. This will save you from a sense of missed opportunities and allow you to enjoy the lavish local hospitality and its distinctive cuisine. Treat yourself with memorable outdoor activities such as a mountainous hiking and biking, a thrilling paragliding flight over endemic peaks, valleys and plateaus, or take an insightful tour to the marvelous Honeybee Garden and Discovery Center.",
		},
		{
			id: 2,
			title: "Top 5 wonderful spots for a car photo session in Dubai",
			firstDescription:
				"There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented? But how to take the impressive-looking photos against a car and a Dubai background that will leave you with fond memories and knock out your friends? It often happens, sadly, that when you see a great spot for a picture, you face some obstacles such as heavy traffic, inability to stop, or getting rid of the crowds – just to name but a few. Nevertheless, it can still be possibl Let us share with you a few secrets that can help you to take really interesting and unforgettable amateur photos. First of all, Dubai is a bit more than only strictly underground parking and, if you know the city as well as we do, you can find plenty of great locations where you can stop without being fined or asked to move on. So, let’s find out more about just a few of these places that have been repeatedly checked out for their feasibility and impact.",
			nameOfPlace: "Palm Jumeriah",
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog2.3203e58a3794aa3a6a79.jpg",
			secondDescription:
				"The Palm Jumeirah is a hand-made archipelago built with the use of land reclamation. Designed to look like a branchy palm tree, it is a well-recognized example of modern urban planning and architectural excellence. No wonder that Palm Jumeirah attracts tons of people who are eager to capture its fashionable background. The place becomes especially desirable if you have, if only on a temporary basis, a car that you’ve always dreamed of. Palm Jumeirah is a truly number one location that offers plenty of stunning views that cannot be covered in this short article. Just come, and you will see for yourself that the place gives thousands of great opportunities to capture the car and yourself against the background of striking architecture mixed with blue and green areas. Shooting here will fill your pictures with a unique atmosphere of sea space skillfully blended with amazing structures.",
		},
		{
			id: 3,
			title: "TOP 5 REASONS TO RENT A CAR DUBAI STYLE THIS SUMMER",
			firstDescription:
				"Get as more as you possibly can from your holiday or business trip to Dubai by visiting a huge number of places each time in a different car ! Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai. If you are in the search of a speedy and stylish vehicle that could help you explore this beautiful city in the most comfortable way, contact our offices before this amazing summer is over! You still can make it in time to benefit from our set of summer offers that we call Trinity Summer Hot Deals, each of which lets you to pay for a car hire nearly 30-50% less than usual. Not only we have one of the widest breadths of luxury and sports cars in Dubai. Our two huge car-hire yards allow us to provide a lot of hot deals supported by the closest attention and expertise of our staff. In our face you will meet a faithful, sincere, and reliable friend ready to give you the detailed professional advice on renting wisely, beneficially, and safely.",
			nameOfPlace: "Burj Halifa",
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog3.fbc6a24068585c350824.jpg",
			secondDescription:
				"Late summer and early autumn is our usual time of best deals and promotions. We’ve prepared a nice surprise for everyone who is crazy about adventure and driving! These days you can get one of the best car hiring offers in the city, which will allow you to drive the coolest cars in the world, such as Rolls Royce, Lamborghini, or Ferrari at knockdown prices! But let’s begin from the beginning, and consider the most feasible reasons why you need to hire a car while on holiday, study, or a working visit in Dubai.",
		},
	];

	const detail = blogDetails.find((detail) => detail.id == Number(id));

	if (!detail) {
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
			<section className="w-[1248px] mx-auto py-10 text-white tracking-wide">
				<article className="space-y-8">
					<h1 className="text-[30px] font-medium leading-none">
						{detail.title}
					</h1>
					<p className="text-[18px]">{detail.firstDescription}</p>
					<h2 className="text-[30px] font-medium leading-none">
						{detail.nameOfPlace}
					</h2>
					<img
						alt="blog imgs"
						src={detail.imgSrc}
						className="w-[100%] h-[78vh] object-cover rounded-lg"
					/>
					<p className="text-[18px]">{detail.secondDescription}</p>
				</article>
			</section>
		</main>
	);
}
