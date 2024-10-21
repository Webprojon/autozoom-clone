import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
	const { id } = useParams();
	const { t } = useTranslation();

	// Static data
	const blogDetails = [
		{
			id: 1,
			title: t("blog-detail-card1.title"),
			firstDescription: t("blog-detail-card1.firstDescription"),
			nameOfPlace: t("blog-detail-card1.nameOfPlace"),
			secondDescription: t("blog-detail-card1.secondDescription"),
			imgSrc:
				"https://www.autozoomrental.com/static/media/dubaiLambo.cff1a7f88b84058682a4.jpg",
		},
		{
			id: 2,
			title: t("blog-detail-card2.title"),
			firstDescription: t("blog-detail-card2.firstDescription"),
			nameOfPlace: t("blog-detail-card2.nameOfPlace"),
			secondDescription: t("blog-detail-card2.secondDescription"),
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog2.3203e58a3794aa3a6a79.jpg",
		},
		{
			id: 3,
			title: t("blog-detail-card3.title"),
			firstDescription: t("blog-detail-card3.firstDescription"),
			nameOfPlace: t("blog-detail-card3.nameOfPlace"),
			secondDescription: t("blog-detail-card3.secondDescription"),
			imgSrc:
				"https://www.autozoomrental.com/static/media/blog3.fbc6a24068585c350824.jpg",
		},
	];

	const detail = blogDetails.find((detail) => detail.id == Number(id));

	if (!detail) {
		return (
			<section className="bg-[#1E1F27] h-[50vh]">
				<p className="text-center pt-[7rem] text-white text-[35px] font-medium">
					{t("blog-detail-notfound")}
				</p>
			</section>
		);
	}

	return (
		<main className="bg-[#1E1F27] px-4 lg:px-0">
			<section className="max-w-[1248px] mx-auto py-10 text-white tracking-wide">
				<article className="space-y-8">
					<h1 className="text-[20px] sm:text-[30px] font-medium leading-8 md:leading-none">
						{detail.title}
					</h1>
					<p className="text-[18px]">{detail.firstDescription}</p>
					<h2 className="text-[30px] font-medium leading-none">
						{detail.nameOfPlace}
					</h2>
					<img
						alt="blog imgs"
						src={detail.imgSrc}
						className="w-[100%] h-[40vh] sm:h-[50vh] md:h-[78vh] object-cover rounded-lg"
					/>
					<p className="text-[18px]">{detail.secondDescription}</p>
				</article>
			</section>
		</main>
	);
}
