import { motion } from 'motion/react';
import portrait from '../assets/images/Portrait-2023.jpg'
import { Coffee, Heart, Code2, Palette } from 'lucide-react';

export function About() {
  const interests = [
    { icon: Coffee, label: 'Coffee Enthusiast', color: 'text-amber-600' },
    { icon: Code2, label: 'Clean Code Advocate', color: 'text-blue-600' },
    { icon: Palette, label: 'Design Lover', color: 'text-rose-600' },
    { icon: Heart, label: 'Open Source Contributor', color: 'text-red-600' },
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-32 h-32 border-4 border-dashed border-amber-300 rounded-full opacity-50" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-dashed border-rose-300 rounded-full opacity-50" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl mb-4 relative inline-block">
            <span className="relative">
              About Me
              <svg
                className="absolute -top-8 -right-12 w-16 h-16"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 2L35 22L42 8L38 28L52 16L42 32L62 30L45 38L58 50L38 45L48 58L32 48L30 62L24 42L16 56L20 36L6 46L16 30L2 32L19 24L6 12L26 18L18 4L32 14L32 2Z"
                  fill="currentColor"
                  className="text-amber-400"
                  opacity="0.6"
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative inline-block">
              {/* Hand-drawn style border */}
              <svg
                className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10 C10 8 12 5 15 5 L385 8 C388 8 395 10 395 15 L392 485 C392 488 389 495 385 495 L15 492 C12 492 5 489 5 485 L10 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-rose-400"
                  strokeLinecap="round"
                />
              </svg>

              <img src={portrait} alt="Delphine Abouab" className="rounded-2xl w-full shadow-xl relative z-10"/>
              {/* Decorative tape effect */}
              <div className="absolute -top-3 right-12 w-16 h-8 bg-amber-200/70 -rotate-12 shadow-md z-20" />
              <div className="absolute -bottom-3 left-12 w-16 h-8 bg-rose-200/70 rotate-6 shadow-md z-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hey there! 👋 I'm a full-stack developer with a passion for
                creating beautiful, user-friendly web experiences. With 5+ years
                of experience, I've worked on everything from e-commerce platforms
                to creative web apps.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe that great code is like great art—it should be both
                functional and beautiful. When I'm not coding, you'll find me
                sketching UI ideas, experimenting with new design trends, or
                contributing to open-source projects.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-8">
                {interests.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="p-4 bg-linear-to-br from-white to-gray-50 rounded-xl shadow-md border-2 border-gray-200 hover:border-gray-300 transition-all cursor-pointer"
                  >
                    <item.icon className={`w-6 h-6 mb-2 ${item.color}`} />
                    <p className="text-sm font-medium text-gray-700">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
