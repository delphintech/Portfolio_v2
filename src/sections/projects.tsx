import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { ProjectModal } from '../components/projects_modal';
import { projects_data } from '../data/projects_data';
import type { Colors } from '../components/projects_modal';
import ProjectBorder from '../assets/ui/projectBorder';

export function Projects() {
  const colorVariants: Colors[] = [
    { border: 'border-accent1/80', bg: 'bg-accent1/15', text: 'text-accent1' },
    { border: 'border-accent2/80', bg: 'bg-accent2/15', text: 'text-accent2' },
    { border: 'border-accent3/80', bg: 'bg-accent3/15', text: 'text-accent3' },
    { border: 'border-accent4/80', bg: 'bg-accent4/15', text: 'text-accent4' },
  ];

  const [modalColors, setModalColors]  = useState<Colors >(colorVariants[0])
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = projects_data

  const handleProjectClick = (project: typeof projects[0], colors: Colors) => {
    setSelectedProject(project);
    setModalColors(colors)
  };

  return (
    <section className="section" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 relative inline-block">
            Projects
          </h2>
          <p className="text-xl text-dark mt-8">
            Form embedded exercises to Full Stack apps, always made with ❤️
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto justify-items-center md:justify-items-stretch">
          {projects.map((project, index) => {
            const colors = colorVariants[index % colorVariants.length]
            const link = project.link ? project.link : project.github
            const linkLogo = project.link ? <Globe className="w-5 h-5 text-dark" /> 
              : <Github className="w-5 h-5 text-dark" /> 

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative w-full max-w-md"
                onClick={() => handleProjectClick(project, colors)}
              >
                <div className="relative">
                  <ProjectBorder className={`absolute -inset-3 w-[110%] h-[105%] pointer-events-none ${colors.text}`} />

                  <div className="relative bg-light rounded-2xl overflow-hidden shadow-lg p-6">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
                      <img src={project.cover} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                        <button onClick={() => handleProjectClick(project, colors)} className="p-3 bg-light rounded-full hover:scale-110 transition-transform">
                          <ExternalLink onClick={() => { setIsModalOpen(true); }} className="w-5 h-5 text-dark" />
                        </button>
                        <a href={link} className="p-3 bg-light rounded-full hover:scale-110 transition-transform" target="_blank">
                          {linkLogo}
                        </a>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-dark">
                      {project.title}
                    </h3>
                    <p className="text-dark/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tag) => (
                        <span
                          key={tag}
                          className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium text-shadow-2xs text-shadow-dark/50`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Decorative corner tape */}
                    <div
                      className={`absolute top-4 right-4 w-12 h-12 ${colors.bg} -rotate-12 opacity-50`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
        colors={modalColors}
      />
    </section>
  );
}
