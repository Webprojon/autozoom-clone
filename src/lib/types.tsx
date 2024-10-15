export interface CarImage {
	id: string;
	is_main: boolean;
	image: {
		src: string;
	};
}

export interface Car {
	id: string;
	brand: {
		title: string;
	};
	model: {
		name: string;
	};
	brand_id: string;
	color: string;
	price_in_aed: number;
	price_in_usd: number;
	year: number;
	seconds: number;
	max_speed: number;
	max_people: number;
	motor: string;
	transmission: string;
	petrol: string;
	category_id: string;
	car_images: CarImage[];
	price_in_aed_sale?: number;
}

export interface CategoryType {
	id: string;
	name_en: string;
	name: string;
	image_src: string;
	title: string;
	cars: Car[];
}
