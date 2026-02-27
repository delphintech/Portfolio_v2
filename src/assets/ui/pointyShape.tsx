import type { SVGProps } from "react";

const PointyShape = ( props: SVGProps<SVGSVGElement> ) => (
	<svg
		className="absolute -top-8 -right-12 w-16 h-16"
		viewBox="0 0 64 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M32 2L35 22L42 8L38 28L52 16L42 32L62 30L45 38L58 50L38 45L48 58L32 48L30 62L24 42L16 56L20 36L6 46L16 30L2 32L19 24L6 12L26 18L18 4L32 14L32 2Z"
			fill="currentColor"
		/>
	</svg>
);

export default PointyShape;