import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/global-context";
import { VscSettings } from "react-icons/vsc";
import { cardDetails } from "../../../lib/hooks";
import SideBar from "./SideBar";

export default function Cars() {
	const { openFilterOptions, setOpenFilterOptions } = useGlobalContext();
	const { data } = useGlobalContext();

	const reducedCars = data.flatMap((items) => items.cars);

	return (
		<main className="max-w-[1540px] bg-[#1E1F27] tracking-wide">
			<section className="text-white flex gap-x-6">
				<SideBar />

				<section
					className={` pt-10 px-4 xs:px-0 mx-auto lg:mx-0 max-w-[400px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1248px]
						${openFilterOptions ? "hidden" : "block"}`}
				>
					<div
						onClick={() => setOpenFilterOptions(!openFilterOptions)}
						className="my-5 rounded-md flex md:hidden justify-center items-center bg-[#2D2E34] w-14 h-12"
					>
						<VscSettings className="size-7" />
					</div>

					<Link to="/" className="opacity-70 text-[15px]">
						Luxury Cars for Rent in Dubai / Hire the latest supercar
					</Link>

					<section className="my-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{reducedCars.map((car) => (
							<section
								key={car.id}
								className="max-w-[400px] w-[100%] mx-auto bg-[#2D2E34] border border-zinc-500 cursor-pointer p-4 text-white rounded-xl"
							>
								{cardDetails(car, car.id)}
							</section>
						))}
					</section>
				</section>
			</section>
		</main>
	);
}
