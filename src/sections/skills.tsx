import { motion } from 'motion/react';
import { Code2, Palette, Database, Zap, Sparkles } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'rose',
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      title: 'Design',
      icon: Palette,
      color: 'amber',
      skills: [
        { name: 'UI/UX Design', level: 88 },
        { name: 'Figma', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Animation', level: 82 },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'blue',
      skills: [
        { name: 'Node.js & Express', level: 87 },
        { name: 'PostgreSQL', level: 83 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools',
      icon: Zap,
      color: 'orange',
      skills: [
        { name: 'Git & GitHub', level: 93 },
        { name: 'Docker', level: 78 },
        { name: 'CI/CD', level: 80 },
        { name: 'Testing', level: 85 },
      ],
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; bar: string }> = {
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', bar: 'bg-rose-500' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', bar: 'bg-amber-500' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', bar: 'bg-blue-500' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', bar: 'bg-orange-500' },
  };

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-amber-200/20 to-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-blue-200/20 to-orange-200/20 rounded-full blur-3xl" />

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

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = colorClasses[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="relative"
              >
                {/* Hand-drawn card border */}
                <svg
                  className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] pointer-events-none"
                  viewBox="0 0 350 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8 Q 175 5, 345 10 L342 312 Q 175 315, 8 310 Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`${colors.text} opacity-30`}
                    strokeDasharray="5,5"
                    fill="white"
                  />
                </svg>

                <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 ${colors.bg} rounded-xl`}>
                      <category.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-bold ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            className={`h-full ${colors.bar} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Also comfortable with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL',
              'AWS',
              'Redux',
              'Webpack',
              'Jest',
              'Sass',
              'Firebase',
              'Prisma',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
