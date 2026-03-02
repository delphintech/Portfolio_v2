import { motion, AnimatePresence } from 'motion/react';
import { X, Globe, Github, Users } from 'lucide-react';
import type { Project } from '../data/projects_data';
import ModalBorder from '../assets/ui/modalBorder';
import Carousel from './carousel';

export type Colors = {
  border: string,
  bg: string,
  text: string
}

interface ProjectModalProps {
  onClose: () => void,
  isOpen: boolean,
  project: Project,
  colors: Colors,
}

export function ProjectModal({ isOpen, onClose, project, colors }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 flex items-center justify-center py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-4xl"
              >
                <ModalBorder className="absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none border-dark" />

                <div className="relative bg-light rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
                  {/* Close button */}
                  <button onClick={onClose}
                    className="absolute top-6 right-6 z-10 p-2 bg-light rounded-full shadow-lg hover:scale-110 transition-transform" >
                    <X className="w-6 h-6 text-dark" />
                  </button>

                  {/* Image */}
                  <Carousel images={project.image} title={project.title} />
                    
                  {/* Decorative tape */}
                  <div className={`absolute top-0 left-0 w-20 h-12 ${colors.bg} -rotate-12 shadow-lg opacity-80`} />
                  
                  <div className="p-10">

                    {/* Title */}
                    <h2 className="text-4xl font-bold mb-4 text-dark">
                      {project.title}
                      { project.link && 
                        <a href={project.link} target="_blank"
                          className="group relative inline-flex items-center justify-center p-2 rounded-full hover:bg-dark/10 transition-colors"
                          aria-label={`Open live site for ${project.title}`}
                        >
                          <Globe className={`w-6 h-6 ${colors.text}`}/>
                        </a>
                      }
                    </h2>


                    {/* Role */}
                    <div className={`p-4 ${colors.bg} rounded-xl mb-8`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className={`w-5 h-5 ${colors.text}`} />
                        <span className="text-sm font-medium text-dark/80">
                          Role
                        </span>
                      </div>
                      <p className="text-dark font-semibold">{project.role}</p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-4 text-dark">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.techs.map((tag) => (
                          <span
                            key={tag}
                            className={`px-5 py-2 ${colors.bg} ${colors.text} rounded-full font-medium shadow-sm text-shadow-2xs text-shadow-dark/50`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-dark">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className={`w-2 h-2 ${colors.text} ${colors.bg} rounded-full mt-2 shrink-0 ring-2 ring-offset-2`} />
                          <span className="text-dark/80 leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                    {/* Button */}
                    <a href={project.github} className="w-fit px-6 py-4 border-2 border-dark text-dark rounded-xl hover:bg-dark hover:text-light transition-all font-medium flex items-center justify-center mx-auto" target="_blank">
                      <Github className="w-5 h-5" />  View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

{/* <button className="flex-1 px-6 py-4 bg-dark text-light rounded-xl hover:dark/90 transition-colors font-medium flex items-center justify-center gap-2 shadow-lg">
  <ExternalLink className="w-5 h-5" />
  View Live Site
</button> */}