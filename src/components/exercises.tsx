import { motion } from "motion/react";
import { Github } from "lucide-react";
import { exercises_data } from "../data/projects_data";
import { colorVariants } from "../data/colors";
import { ExerciseBorder } from "../assets/ui/borders";

export function Exercises() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-center mb-10 mt-20"
			>
				<h3 className="text-3xl font-bold text-dark mb-2">
				Technical Training
				</h3>
				<p className="text-dark/80">
				From Embedded to Cybersecurity
				</p>
			</motion.div>

			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
			{exercises_data.map((project, index) => {
				const colors = colorVariants[index % colorVariants.length];
				return (
				<motion.a
					key={project.title}
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.05 }}
					whileHover={{ y: -4 }}
					className="group relative block"
				>
					{/* Simple hand-drawn border */}
					<div className="relative">
					<ExerciseBorder className={`absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] pointer-events-none ${colors.text}`} />

					<div className="relative bg-light rounded-xl p-5 shadow-md">
						{/* Header with GitHub icon */}
						<div className="flex items-start justify-between mb-3">
						<h4 className="text-lg font-bold text-dark group-hover:text-muted transition-colors">
							{project.title}
						</h4>
						<Github className={`w-5 h-5 ${colors.text} shrink-0`} />
						</div>

						<p className="text-dark/80 text-sm mb-4 leading-relaxed">
						{project.description}
						</p>

						{/* Tags */}
						<div className="flex flex-wrap gap-2 mb-4">
						{project.tags.map((tag) => (
							<span
							key={tag}
							className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium text-shadow-2xs text-shadow-dark/50`}
							>
							{tag}
							</span>
						))}
						</div>

						{/* Decorative element */}
						<div
						className={`absolute top-3 right-3 w-8 h-8 ${colors.bg} -rotate-12 opacity-40 -z-10`}
						/>
					</div>
					</div>
				</motion.a>
				);
			})}
			</div>
		</>
	)
}
