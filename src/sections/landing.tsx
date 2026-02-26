import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export function Landing() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-amber-50 via-rose-50 to-orange-50 px-6">
      {/* Decorative color Background*/}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-block relative">
            <span className="text-sm uppercase tracking-widest text-rose-600 font-medium inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Software Developer
              <Sparkles className="w-4 h-4" />
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl mb-8 relative"
        >
          <span className="inline-block font-light text-gray-900">Welcome</span>
          <br />
          <span className="mt-5 inline-block font-bold bg-linear-to-r from-rose-500 via-amber-500 to-orange-500 bg-clip-text text-transparent relative">
            Delphintech
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C50 5 100 2 150 5C200 8 250 3 298 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-amber-400"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I craft delightful digital experiences with code, creativity, and a
          whole lot of ☕. Turning ideas into beautiful, functional realities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:scale-105 transition-transform font-medium shadow-lg hover:shadow-xl">
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all font-medium">
            Let's Chat
          </button>
        </motion.div>

        {/* Arrow Down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
