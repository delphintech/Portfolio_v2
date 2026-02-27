import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Users } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    color: string;
    longDescription: string;
    role: string;
    duration: string;
    team: string;
    features: string[];
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
    rose: { border: 'border-rose-400', bg: 'bg-rose-50', text: 'text-rose-600' },
    amber: { border: 'border-amber-400', bg: 'bg-amber-50', text: 'text-amber-600' },
    blue: { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-600' },
    orange: { border: 'border-orange-400', bg: 'bg-orange-50', text: 'text-orange-600' },
  };

  const colors = colorClasses[project.color];

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
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
                {/* Hand-drawn border */}
                <svg
                  className="absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none"
                  viewBox="0 0 900 1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10 12 L890 8 L895 990 L15 995 Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    className={colors.border}
                    strokeLinecap="round"
                    fill="white"
                  />
                </svg>

                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <X className="w-6 h-6 text-gray-900" />
                  </button>

                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
					<img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Decorative tape */}
                    <div className={`absolute top-6 left-6 w-20 h-12 ${colors.bg} -rotate-12 shadow-lg opacity-80`} />
                  </div>

                  {/* Content */}
                  <div className="p-10">
                    <div className="mb-6">
                      <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        {project.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Project Info */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className={`p-4 ${colors.bg} rounded-xl`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Users className={`w-5 h-5 ${colors.text}`} />
                          <span className="text-sm font-medium text-gray-700">
                            Role
                          </span>
                        </div>
                        <p className="text-gray-900 font-semibold">{project.role}</p>
                      </div>

                      <div className={`p-4 ${colors.bg} rounded-xl`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className={`w-5 h-5 ${colors.text}`} />
                          <span className="text-sm font-medium text-gray-700">
                            Duration
                          </span>
                        </div>
                        <p className="text-gray-900 font-semibold">{project.duration}</p>
                      </div>

                      <div className={`p-4 ${colors.bg} rounded-xl`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Users className={`w-5 h-5 ${colors.text}`} />
                          <span className="text-sm font-medium text-gray-700">
                            Team Size
                          </span>
                        </div>
                        <p className="text-gray-900 font-semibold">{project.team}</p>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
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
                            <span className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0 ring-2 ring-offset-2 ${colors.border.replace('border-', 'ring-')}`} />
                            <span className="text-gray-700 leading-relaxed">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-5 py-2 ${colors.bg} ${colors.text} rounded-full font-medium shadow-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button className="flex-1 px-6 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 shadow-lg">
                        <ExternalLink className="w-5 h-5" />
                        View Live Site
                      </button>
                      <button className="flex-1 px-6 py-4 border-2 border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all font-medium flex items-center justify-center gap-2">
                        <Github className="w-5 h-5" />
                        View Code
                      </button>
                    </div>
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