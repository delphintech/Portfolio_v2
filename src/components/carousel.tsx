import { useState } from "react";

interface CarouselProps {
  images: string | string[];
  title: string;
}

export default function Carousel ({ images, title }: CarouselProps) {
	const [carouselIndex, setCarouselIndex] = useState(0);
	const isCarousel = Array.isArray(images);

	return (
		<div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
			{isCarousel ? (
				<div className="relative">
				<img src={images[carouselIndex]} alt={title}
					className="w-full h-full object-cover transition-transform duration-500"/>
				<button
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-light rounded-full p-2"
					disabled={carouselIndex === 0}
					onClick={e => {	e.stopPropagation(); setCarouselIndex(carouselIndex - 1);}} />
				<button
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-light rounded-full p-2"
					disabled={carouselIndex === images.length - 1}
					onClick={e => {	e.stopPropagation(); setCarouselIndex(carouselIndex + 1);}} />
				</div>
			) : (
				<img src={images} alt={title}
					className="w-full h-full object-cover transition-transform duration-500"/>
			)}
		</div>
	)
}