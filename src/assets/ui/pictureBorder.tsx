import type { SVGProps } from "react";

const PictureBorder = ( props: SVGProps<SVGSVGElement> ) => (
	<svg
		viewBox="0 0 400 500"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
	<path
		d="M10 10 C10 8 12 5 15 5 L385 8 C388 8 395 10 395 15 L392 485 C392 488 389 495 385 495 L15 492 C12 492 5 489 5 485 L10 10"
		stroke="currentColor"
		strokeWidth="3"
		strokeLinecap="round"
	/>
	</svg>
);

export default PictureBorder;