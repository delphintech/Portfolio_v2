import type { SVGProps } from "react";

const ModalBorder = ( props: SVGProps<SVGSVGElement> ) => (
	<svg
		viewBox="0 0 900 1000"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
		{...props}
	>
		<path
			d="M10 12 L890 8 L895 990 L15 995 Z"
			stroke="currentColor"
			strokeWidth="4"
			strokeLinecap="round"
			fill="white"
		/>
	</svg>
);

export default ModalBorder;