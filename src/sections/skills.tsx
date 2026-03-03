import { motion } from 'motion/react';
import { skills, techs, certifs } from '../data/skills_data';
import { colorVariants } from '../data/colors';
import { SkillsBorder, AddSkillsBorder, CertifBorder } from '../assets/ui/borders';
import { StarBadge, Wave } from '../assets/ui/shapes';

export function Skills() {
  return (
    <section id="skills" className="section px-6 bg-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-accent1/20 to-accemt3/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-accent2/20 to-accent1/20 rounded-full blur-3xl" />

      {/* Decorative scattered elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-accent3/40 rounded-full" />
      <div className="absolute top-40 right-40 w-2 h-2 bg-accent1/40 rounded-full" />
      <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-accent2/40 rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6">Skills & Expertise</h2>
          <p className="text-xl text-dark max-w-2xl mx-auto">
            A diverse set of skills cultivated through years of passion and practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {skills.map((category, categoryIndex) => {
            const colors = colorVariants[categoryIndex % colorVariants.length];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="relative group"
              >
                <SkillsBorder className={`${colors.text} absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity`} />
                <div className="relative bg-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-linear-to-br ${colors.gradient} rounded-2xl shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                      <category.icon className="w-8 h-8 text-light" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">
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
                        className={`px-4 py-2 ${colors.bg} ${colors.text} text-shadow-2xs text-shadow-dark/50 rounded-lg font-medium shadow-sm hover:shadow-md transition-all cursor-default border-2 ${colors.border}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Decorative corner sticker */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-linear-to-br ${colors.gradient} rounded-full opacity-50`} />
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
          <AddSkillsBorder className="text-muted absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] pointer-events-none opacity-30" />
          <div className="bg-linear-to-br from-gray-200 to-light p-10 rounded-3xl shadow-inner relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark mb-2">
                Also Working With
              </h3>
              <p className="text-dark/80">
                Technologies I'm comfortable using and exploring
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {techs.map((tech, index) => {
                const colors = colorVariants[index % colorVariants.length];
                
                return (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ scale: 1.15, rotate: Math.random() > 0.5 ? 5 : -5 }}
                    className="px-5 py-3 bg-light text-dark/80 rounded-full text-sm font-medium hover:shadow-lg transition-all cursor-default border-2 border-light hover:border-muted/50 relative group"
                  >
                    {tech}
                    {/* Hover sparkle effect */}
                    <span className={`absolute -top-1 -right-1 w-2 h-2 ${colors.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </motion.span>
                );
              })}
            </div>

            {/* Decorative tape corners */}
            <div className="absolute -top-3 left-16 w-16 h-8 bg-accent3/50 -rotate-12 shadow-sm" />
            <div className="absolute -top-3 right-16 w-16 h-8 bg-accent1/50 rotate-12 shadow-sm" />
          </div>
        </motion.div>

        {/* Certifications section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-dark mb-2">
              Certifications & Achievements
            </h3>
            <p className="text-dark/70">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifs.map((cert, index) => {
              const colors = colorVariants[index % colorVariants.length];
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, rotate: 1 }}
                  className="relative group"
                >
                  <CertifBorder color={colors.text} className={`${colors.text} absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity`}/>

                  <div className={`relative bg-linear-to-br from-light to-gray-200 p-6 rounded-xl shadow-lg border-2 ${colors.border} group-hover:shadow-xl transition-all`}>
                    {/* Certification badge */}
                    <div className={`absolute -top-3 -right-3 w-12 h-12 bg-linear-to-br ${colors.gradient} rounded-full flex items-center justify-center shadow-md transform rotate-12 group-hover:rotate-0 transition-transform`}>
                      <StarBadge className="w-6 h-6 text-light" />
                    </div>

                    <div className="mb-3">
                      <h4 className="text-xl font-bold text-dark mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-dark/70 text-sm">{cert.issuer}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-4 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}>
                        {cert.year}
                      </span>
                      <Wave className={`w-16 h-8 ${colors.text} opacity-20`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
