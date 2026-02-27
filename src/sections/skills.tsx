import { motion } from 'motion/react';
import { Code2, Palette, Database, Zap, Sparkles } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'rose',
      skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'JavaScript ES6+', 'HTML5 & CSS3'],
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'amber',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'Responsive Design'],
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'blue',
      skills: ['Node.js & Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Authentication'],
    },
    {
      title: 'Tools & Workflow',
      icon: Zap,
      color: 'orange',
      skills: ['Git & GitHub', 'Docker', 'CI/CD', 'Jest & Testing', 'Webpack', 'Agile/Scrum'],
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; gradient: string; border: string }> = {
    rose: {
      bg: 'bg-rose-100',
      text: 'text-rose-600',
      gradient: 'from-rose-400 to-pink-400',
      border: 'border-rose-300',
    },
    amber: {
      bg: 'bg-amber-100',
      text: 'text-amber-600',
      gradient: 'from-amber-400 to-yellow-400',
      border: 'border-amber-300',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      gradient: 'from-blue-400 to-cyan-400',
      border: 'border-blue-300',
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      gradient: 'from-orange-400 to-red-400',
      border: 'border-orange-300',
    },
  };

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-orange-200/20 rounded-full blur-3xl" />

      {/* Decorative scattered elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-rose-400 rounded-full" />
      <div className="absolute top-40 right-40 w-2 h-2 bg-amber-400 rounded-full" />
      <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-500" />
            <span className="text-amber-600 uppercase tracking-widest text-sm font-medium">
              My Toolkit
            </span>
            <Sparkles className="w-6 h-6 text-amber-500" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse set of skills cultivated through years of passion and practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const colors = colorClasses[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="relative group"
              >
                {/* Hand-drawn card border */}
                <svg
                  className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity"
                  viewBox="0 0 400 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8 C 100 6, 300 8, 395 10 L395 340 C 300 342, 100 340, 5 338 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={colors.text}
                    strokeDasharray="8,8"
                  />
                </svg>

                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-lg font-medium shadow-sm hover:shadow-md transition-all cursor-default border-2 ${colors.border}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Decorative corner sticker */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${colors.gradient} rounded-full opacity-50`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Hand-drawn border around additional skills */}
          <svg
            className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] pointer-events-none opacity-30"
            viewBox="0 0 900 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10 Q 450 5, 890 12 L888 188 Q 450 195, 12 185 Z"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400"
              strokeDasharray="10,5"
            />
          </svg>

          <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-inner relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Also Working With
              </h3>
              <p className="text-gray-600">
                Technologies I'm comfortable using and exploring
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                'AWS',
                'Redux',
                'Sass',
                'Firebase',
                'Prisma',
                'WebSocket',
                'Jest',
                'Storybook',
                'Webpack',
                'Material UI',
                'Framer Motion',
                'D3.js',
                'Chart.js',
                'Stripe API',
                'OAuth',
                'Vercel',
              ].map((tech, index) => {
                const colors = ['rose', 'amber', 'blue', 'orange'];
                const colorClass = colorClasses[colors[index % colors.length]];
                
                return (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ scale: 1.15, rotate: Math.random() > 0.5 ? 5 : -5 }}
                    className="px-5 py-3 bg-white text-gray-700 rounded-full text-sm font-medium hover:shadow-lg transition-all cursor-default border-2 border-gray-200 hover:border-gray-300 relative group"
                  >
                    {tech}
                    {/* Hover sparkle effect */}
                    <span className={`absolute -top-1 -right-1 w-2 h-2 ${colorClass.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </motion.span>
                );
              })}
            </div>

            {/* Decorative tape corners */}
            <div className="absolute -top-3 left-16 w-16 h-8 bg-rose-200/50 -rotate-12 shadow-sm" />
            <div className="absolute -top-3 right-16 w-16 h-8 bg-amber-200/50 rotate-12 shadow-sm" />
          </div>
        </motion.div>

        {/* Fun stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Years Experience', color: 'rose' },
            { number: '50+', label: 'Projects Completed', color: 'amber' },
            { number: '20+', label: 'Happy Clients', color: 'blue' },
            { number: '∞', label: 'Cups of Coffee', color: 'orange' },
          ].map((stat, index) => {
            const colors = colorClasses[stat.color];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, rotate: 2 }}
                className={`p-6 bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-lg text-center text-white transform hover:scale-105 transition-all`}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
