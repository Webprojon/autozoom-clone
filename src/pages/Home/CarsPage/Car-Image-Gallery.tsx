import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import { CarImage } from "../../../lib/types";

interface CarImageGalleryProps {
	images: CarImage[];
}

export default function CarImageGallery({ images }: CarImageGalleryProps) {
	const [carImages, setCarImages] = useState(images);

	const handleThumbnailClick = (imgId: number) => {
		const updatedImages = carImages.map((img: CarImage, index: number) => ({
			...img,
			is_main: index === imgId,
		}));
		setCarImages(updatedImages);
	};

	return (
		<main className="flex lg:space-x-5 lg:mb-12">
			<Swiper
				spaceBetween={0}
				slidesPerView={3}
				mousewheel={true}
				direction="vertical"
				modules={[FreeMode, Mousewheel]}
				className="h-[40vh] lg:h-[50vh] w-[200px] overflow-y-auto no-scrollbar"
			>
				{carImages.map(
					(img: CarImage, index: number) =>
						!img.is_main && (
							<SwiperSlide key={img.id}>
								<img
									alt="car thumbnail"
									onClick={() => handleThumbnailClick(index)}
									className="h-[12vh] lg:h-[14vh] w-[80%] lg:w-full object-cover rounded-md"
									src={`https://api.autozoomrental.com/api/uploads/images/${img.image.src}`}
								/>
							</SwiperSlide>
						),
				)}
			</Swiper>

			<Swiper className="lg:h-[60vh] w-full">
				{carImages.map(
					(img: CarImage) =>
						img.is_main && (
							<SwiperSlide key={img.id}>
								<img
									alt="selected car img"
									className="w-full lg:w-[97%] h-[58%] xs:h-[100%] lg:h-[50vh] object-cover rounded-md"
									src={`https://api.autozoomrental.com/api/uploads/images/${img.image.src}`}
								/>
							</SwiperSlide>
						),
				)}
			</Swiper>
		</main>
	);
}
