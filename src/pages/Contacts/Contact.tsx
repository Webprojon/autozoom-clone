import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function Contact() {
	return (
		<main className="bg-[#1E1F27] pt-10 pb-20">
			<article className="w-[1248px] mx-auto text-white">
				<h1 className="leading-none uppercase text-[30px] font-semibold">
					Have any questions ?
				</h1>
				<p className="text-gray-300 pt-3">
					We would love to help <br /> Auto Zoom Car Rental Dubai, is the best
					luxury car rental Dubai based company.
				</p>

				<section className="mt-16">
					<p className="font-semibold text-[24px]">Head office</p>
					<div className="flex flex-col gap-y-3 pb-5 mt-3 border-b-2">
						<span className="flex items-center">
							<GrLocation className="size-5 text-gray-400 mr-3" />
							Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
						</span>

						<span className="flex items-center">
							<FaPhoneAlt className="size-4 text-gray-400 mr-3" />
							+971 52 7030189
						</span>

						<span className="flex items-center">
							<HiOutlineMailOpen className="size-5 text-gray-400 mr-3" />
							office@autozoomrental.com
						</span>
					</div>
				</section>

				<section className="mt-10">
					<iframe
						loading="lazy"
						className="w-[1248px] h-[48vh] rounded-xl"
						src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d14459.052710148526!2d55.2221303!3d25.0421098!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f6d53365bbdd1%3A0x47f70fa3391df6cb!2sTreppan%20Hotel%20and%20Suites%20by%20Fakhruddin%20Dubai%20Sports%20City%20-%20Dubai%20United%20Arab%20Emirates!3m2!1d25.0421098!2d55.222130299999996!5e0!3m2!1sen!2spl!4v1729068817582!5m2!1sen!2spl"
					></iframe>
				</section>
			</article>
		</main>
	);
}
