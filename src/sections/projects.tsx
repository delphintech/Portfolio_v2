import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Artisan Marketplace',
      description:
        'A handcrafted e-commerce platform connecting local artisans with customers worldwide. Built with React, Node.js, and Stripe integration.',
      image:
        'https://images.unsplash.com/photo-1642052503083-9b9f61e75710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGF5b3V0fGVufDF8fHx8MTc3MjEwNzM3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'rose',
    },
    {
      title: 'MindFlow App',
      description:
        'A mindfulness and productivity mobile app helping users balance work and wellness. Features include meditation timers and habit tracking.',
      image:
        'https://images.unsplash.com/photo-1661246626039-5429b8f7488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcyMDMzMTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      color: 'amber',
    },
    {
      title: 'DataViz Dashboard',
      description:
        'An analytics dashboard for visualizing complex data sets with interactive charts and real-time updates. Perfect for data-driven decision making.',
      image:
        'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcyMDYwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'D3.js', 'PostgreSQL'],
      color: 'blue',
    },
    {
      title: 'Creative Portfolio Builder',
      description:
        'A drag-and-drop portfolio builder for creatives with customizable templates and seamless hosting. No coding required!',
      image:
        'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdlYiUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzIwNDQ5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      color: 'orange',
    },
  ];

  const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
    rose: { border: 'border-rose-400', bg: 'bg-rose-50', text: 'text-rose-600' },
    amber: { border: 'border-amber-400', bg: 'bg-amber-50', text: 'text-amber-600' },
    blue: { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-600' },
    orange: { border: 'border-orange-400', bg: 'bg-orange-50', text: 'text-orange-600' },
  };

  return (
    <section className="py-32 px-6 bg-linear-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 relative inline-block">
            Featured Projects
            {/* Hand-drawn underline */}
            <svg
              className="absolute -bottom-4 left-0 w-full"
              height="20"
              viewBox="0 0 500 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12 Q 125 8, 250 10 T 495 15"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-amber-400"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p className="text-xl text-gray-600 mt-8">
            A collection of projects I've poured my heart into ❤️
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Hand-drawn border effect */}
                <div className="relative">
                  <svg
                    className="absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none"
                    viewBox="0 0 400 550"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 12 L390 8 L395 540 L10 545 Z"
                      stroke="currentColor"
                      strokeWidth="3"
                      className={colors.border}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                    />
                  </svg>

                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg p-6">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                        <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                          <ExternalLink className="w-5 h-5 text-gray-900" />
                        </button>
                        <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                          <Github className="w-5 h-5 text-gray-900" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Decorative corner element */}
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
    </section>
  );
}
