import type { SVGProps } from "react";

export const PointyShape = ( props: SVGProps<SVGSVGElement> ) => (
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

export const StarBadge = ( props: SVGProps<SVGSVGElement> ) => (
	<svg
		fill="currentColor"
		viewBox="0 0 20 20"
		{...props}
	>
		<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
	</svg>
);

export const Wave = ( props: SVGProps<SVGSVGElement> ) => (
	<svg
		viewBox="0 0 64 32"
		fill="none"
		{...props}
	>
		<path
			d="M2 16 Q 16 8, 32 16 T 62 16"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
	</svg>
);