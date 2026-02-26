import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Landing() {
  return (
    <section className="landing min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-dark/20 via-accent3/30 to-dark/20 px-6">
      {/* Decorative color Background*/}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent1/30 rounded-full blur-3xl"/>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent2/20 rounded-full blur-3xl"/>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl mb-8 relative"
        >
          <span className="text-4xl inline-block text-dark">Welcome</span>
          <br />
          <span className="grad font-serif text-7xl mb-4">DelphInTech</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <div className="badge ">Software engineer</div>
        </motion.div>

        {/* Arrow Down */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
