import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface CarouselProps {
  images: string | string[];
  title: string;
}

export default function Carousel ({ images, title }: CarouselProps) {
	const [carouselIndex, setCarouselIndex] = useState(0);
	const isCarousel = Array.isArray(images);

	return (
		<div className="relative overflow-hidden rounded-xl aspect-4/3 bg-dark/50">
			{isCarousel ? (
				<div className="relative w-full h-full">
				<img src={images[carouselIndex]} alt={title}
					className="w-full h-full object-contain transition-transform duration-500"/>
				<button
					className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hover:bg-light/30 rounded-full p-2"
					disabled={carouselIndex === 0}
					onClick={() => { setCarouselIndex(carouselIndex - 1);}} ><ChevronLeft /></button>
				<button
					className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hover:bg-light/30 rounded-full p-2"
					disabled={carouselIndex === images.length - 1}
					onClick={() => {	setCarouselIndex(carouselIndex + 1);}} ><ChevronRight /></button>
				</div>
			) : (
				<img src={images} alt={title}
					className="w-full h-full object-contain transition-transform duration-500"/>
			)}
		</div>
	)
}