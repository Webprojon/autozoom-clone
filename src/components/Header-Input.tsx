import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useGlobalContext } from "../context/global-context";
import { Link } from "react-router-dom";
import { scrollTop } from "../lib/hooks";

export default function HeaderInput() {
	const [inputValue, setInputValue] = useState("");
	const { data } = useGlobalContext();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleClick = () => {
		scrollTop();
		setInputValue("");
	};

	const cars = data.flatMap((items) => items.cars);

	const filteredCars = cars.filter((car) =>
		car.brand.title.toLowerCase().includes(inputValue.toLowerCase()),
	);

	return (
		<section className="relative text-white">
			<input
				type="text"
				placeholder="Search..."
				value={inputValue}
				onChange={handleChange}
				className="header-input-bg w-[320px] bg-[#36373D] py-[12px] pl-[42px] text-[15px] rounded-lg tracking-wider outline-none text-stone-300 placeholder:text-stone-300"
			/>
			<FiSearch className="absolute top-1/2 left-2 -translate-y-1/2 size-6" />

			{inputValue && (
				<article className="absolute top-16 w-[320px] px-4 bg-[#36373D] rounded-lg overflow-y-auto no-scrollbar">
					{filteredCars?.map((car) => (
						<Link
							key={car.id}
							to={`cars/${car.brand_id}`}
							className="flex py-[4px] font-medium text-[17px] tracking-wide"
							onClick={handleClick}
						>
							{car.brand.title} {car.model.name}
						</Link>
					))}
				</article>
			)}
		</section>
	);
}
