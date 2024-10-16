import { CgChevronRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { scrollTop } from "../../lib/hooks";

export default function Blog() {
	// Static data
	const blogPosts = [
		{
			id: 1,
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog1.971f8906370cf6d25479.jpg",
			title: "Top 3 Destinations to Visit in Dubai in a Rental Car",
			description:
				"One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.",
			date: "25 Sep 2022",
			link: "/",
		},
		{
			id: 2,
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog2.3203e58a3794aa3a6a79.jpg",
			title: "Top 5 wonderful spots for a car photo session in Dubai",
			description:
				"There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation...",
			date: "11 Feb 2022",
			link: "/",
		},
		{
			id: 3,
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog3.fbc6a24068585c350824.jpg",
			title: "Top 5 Reasons to Rent a Car Dubai Style this Summer",
			description:
				"Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai.",
			date: "31 Jul 2022",
			link: "/",
		},
	];

	return (
		<main className="bg-[#1E1F27]">
			<article className="w-[1248px] mx-auto text-white py-8">
				<h1 className="leading-none uppercase text-[29px] font-semibold">
					Blog
				</h1>

				<article className="bg-[#272933] p-8 mt-10 w-[1248px] space-y-12">
					{blogPosts?.map((blog) => (
						<section key={blog.id} className="flex space-x-12">
							<img
								alt="car blog imgs"
								className="w-[220px] h-[30vh] rounded-md"
								src={blog.imgSrc}
							/>
							<div className="flex flex-col justify-between">
								<Link
									to={blog.link}
									className="font-semibold text-[30px] leading-none"
								>
									{blog.title}
								</Link>
								<p className="text-[18px]">{blog.description}</p>
								<div className="flex justify-between">
									<span className="text-gray-400">{blog.date}</span>
									<Link to={blog.link}>
										<CgChevronRightO className="size-8" onClick={scrollTop} />
									</Link>
								</div>
							</div>
						</section>
					))}
				</article>
			</article>
		</main>
	);
}
