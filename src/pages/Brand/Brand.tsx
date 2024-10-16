import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/global-context";
import axios from "axios";
import { Link } from "react-router-dom";
import { CategoryType } from "../../lib/types";

export default function Brand() {
	const { setIsHovered } = useGlobalContext();
	const [brands, setBrands] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://api.autozoomrental.com/api/brands",
				);
				setBrands(response.data.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<main
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="absolute right-10 top-[4.6rem] w-[800px] rounded-[20px] bg-[#272933]"
		>
			<article className="grid grid-cols-3 space-y-5 p-6">
				{brands?.map((brand: CategoryType) => (
					<Link
						to={`cars/${brand.id}`}
						className="flex items-center space-x-3"
						onClick={() => setIsHovered(false)}
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
