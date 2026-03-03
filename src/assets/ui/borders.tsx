import type { SVGProps } from "react";

export const ModalBorder = ( props: SVGProps<SVGSVGElement> ) => (
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

export const PictureBorder = ( props: SVGProps<SVGSVGElement> ) => (
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

export const ProjectBorder = ( props: SVGProps<SVGSVGElement> ) => (
	<svg
		viewBox="0 0 400 550"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M8 12 L390 8 L395 540 L10 545 Z"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="white"
		/>
	</svg>
);

export const SkillsBorder = ( props: SVGProps<SVGSVGElement> ) => (
	<svg
		viewBox="0 0 400 350"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
		d="M5 8 C 100 6, 300 8, 395 10 L395 340 C 300 342, 100 340, 5 338 Z"
		stroke="currentColor"
		strokeWidth="2"
		strokeDasharray="8,8"
		/>
	</svg>
);

export const AddSkillsBorder = ( props: SVGProps<SVGSVGElement> ) => (
	<svg
		viewBox="0 0 900 200"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M10 10 Q 450 5, 890 12 L888 188 Q 450 195, 12 185 Z"
			stroke="currentColor"
			strokeWidth="2"
			strokeDasharray="10,5"
		/>
	</svg>
);

export const CertifBorder = ({ color, ...props}: SVGProps<SVGSVGElement> & { color?: string })  => (
	<svg
		viewBox="0 0 400 180"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M8 10 L392 8 L394 172 L10 175 Z"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinecap="round"
			fill="white"
		/>
		{/* Decorative corner marks */}
		<path d="M15 15 L30 15 M15 15 L15 30" stroke="currentColor" strokeWidth="2" className={color} />
		<path d="M385 15 L370 15 M385 15 L385 30" stroke="currentColor" strokeWidth="2" className={color} />
		<path d="M15 168 L30 168 M15 168 L15 153" stroke="currentColor" strokeWidth="2" className={color} />
		<path d="M385 168 L370 168 M385 168 L385 153" stroke="currentColor" strokeWidth="2" className={color} />
	</svg>
);