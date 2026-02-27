import type { SVGProps } from "react";

const ProjectBorder = ( props: SVGProps<SVGSVGElement> ) => (
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

export default ProjectBorder;