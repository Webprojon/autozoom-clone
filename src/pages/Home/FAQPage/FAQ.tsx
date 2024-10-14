import { useState } from "react";
import { CgChevronDownO, CgChevronRightO } from "react-icons/cg";

export default function FAQPage() {
	const [toggle, setToggle] = useState<number | null>(null);

	const handleToggle = (id: number | null) => {
		setToggle((prev) => (prev === id ? null : id));
	};

	// Static Data
	const faqs = [
		{
			id: 1,
			question: "What is the minimum age requirements to rent a car in Dubai ?",
			answer:
				"Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.",
		},
		{
			id: 2,
			question: "What do you need for a luxury car rental in Dubai ?",
			answer:
				"Drivers shall be required to have a valid driver's license and Passport copy.",
		},
		{
			id: 3,
			question:
				"How much is the insurance limit on luxury car rental in Dubai ?",
			answer:
				"Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.",
		},
		{
			id: 4,
			question:
				"What are the driving licenses that can be used in Arabic countries ?",
			answer:
				"Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.",
		},
		{
			id: 5,
			question: "Can anyone else drive the car and rent ?",
			answer:
				"The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport.",
		},
	];
	return (
		<main className="bg-[#1E1F27]">
			<article className="w-[1248px] mx-auto text-white tracking-wider">
				<h1 className="font-medium text-[30px] py-6">FAQ</h1>
				<section className="h-[70vh] flex flex-col gap-y-10 mt-6 md:mt-0">
					{faqs.map(({ id, question, answer }) => (
						<div key={id} className="lg:w-[900px]">
							<div className="border-b border-gray-600">
								<div className="group flex items-center gap-x-5 pb-2 lg:mb-2">
									<div onClick={() => handleToggle(id)}>
										{toggle === id ? (
											<CgChevronDownO className="size-7" />
										) : (
											<CgChevronRightO className="size-7" />
										)}
									</div>

									<h2
										onClick={() => handleToggle(id)}
										className="text-sm cursor-pointer xs:text-[16px] sm:text-[20px] lg:text-[23px]"
									>
										{question}
									</h2>
								</div>

								<div
									className={`overflow-hidden transition-max-height duration-500 ease-in-out 
										${toggle === id ? "max-h-screen" : "max-h-0"}`}
								>
									<p className="bg-[#272933] mb-2 py-2 px-4 text-sm xs:text-md sm:text-lg">
										{answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</section>
			</article>
		</main>
	);
}
