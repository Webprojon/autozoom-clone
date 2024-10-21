import { CgChevronRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { scrollTop } from "../../lib/hooks";
import { useTranslation } from "react-i18next";

export default function Blog() {
	const { t } = useTranslation();

	// Static data
	const blogPosts = [
		{
			id: 1,
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog1.971f8906370cf6d25479.jpg",
			title: t("blog-card1.title"),
			description: t("blog-card1.description"),
			date: t("blog-card1.date"),
		},
		{
			id: 2,
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog2.3203e58a3794aa3a6a79.jpg",
			title: t("blog-card2.title"),
			description: t("blog-card2.description"),
			date: t("blog-card2.date"),
		},
		{
			id: 3,
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog3.fbc6a24068585c350824.jpg",
			title: t("blog-card3.title"),
			description: t("blog-card3.description"),
			date: t("blog-card3.date"),
		},
	];

	return (
		<main className="bg-[#1E1F27]">
			<article className="max-w-[1248px] mx-auto text-white py-8 px-4 lg:px-0">
				<h1 className="leading-none uppercase text-[29px] font-semibold">
					{t("blog")}
				</h1>

				<article className="bg-[#272933] p-8 mt-10 mx-auto sm:max-w-[700px] md:max-w-[1248px] space-y-12">
					{blogPosts?.map((blog) => (
						<section
							key={blog.id}
							className="flex flex-col md:flex-row md:space-x-12"
						>
							<img
								alt="car blog imgs"
								className="w-full lg:w-[220px] h-[28vh] xs:h-[40vh] lg:h-[30vh] rounded-md"
								src={blog.imgSrc}
							/>
							<div className="flex flex-col justify-between">
								<Link
									to={`/blog_info/${blog.id}`}
									className="font-semibold text-[18px] sm:text-[27px] leading-7 mt-7"
								>
									{blog.title}
								</Link>
								<p className="text-[18px] py-6 md:py-0">{blog.description}</p>
								<div className="flex justify-between">
									<span className="text-gray-400">{blog.date}</span>
									<Link to={`/blog_info/${blog.id}`}>
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
