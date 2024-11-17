import { useGlobalContext } from "../../context/global-context";
import { Link } from "react-router-dom";
import { CategoryType } from "../../lib/types";
import { scrollTop, useFetch } from "../../lib/hooks";

export default function Brand() {
	const { setIsHovered } = useGlobalContext();

	const { data, isLoading } = useFetch(
		"https://api.autozoomrental.com/api/brands",
	);

	const handleClickLink = () => {
		setIsHovered(false);
		scrollTop();
	};

	return (
		<main
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="absolute right-10 top-[4.6rem] w-[800px] rounded-[20px] bg-[#272933]"
		>
			{isLoading && (
				<div className="text-center text-white text-[20px] pt-3">
					Loading...
				</div>
			)}
			<article className="grid grid-cols-3 space-y-5 px-6 py-2">
				{data?.map((brand: CategoryType) => (
					<Link
						to={`cars/${brand.id}`}
						className="flex items-center space-x-3"
						onClick={handleClickLink}
					>
						<img
							alt={brand.title}
							className="w-[37px]"
							src={`https://api.autozoomrental.com/api/uploads/images/${brand.image_src}`}
						/>
						<p className="text-zinc-400 font-medium text-[15px]">
							Rent <span className="text-white">{brand.title}</span> Dubai
						</p>
					</Link>
				))}
			</article>
		</main>
	);
}
