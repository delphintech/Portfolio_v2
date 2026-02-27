import { motion } from 'motion/react';
// import portrait from '../assets/images/Portrait-2023.jpg'
import portrait from '../assets/images/portrait pro clair.png'
import { Dumbbell, Guitar } from 'lucide-react';
import PointyShape from '../assets/ui/pointyShape';
import PictureBorder from '../assets/ui/pictureBorder';

export function About() {
  const interests = [
    { icon: Dumbbell, label: 'French boxing enthusiast', color: 'text-main' },
    { icon: Guitar, label: 'Ukulele player', color: 'text-accent1' },
  ];

  return (
    <section className="section pt-32" id="about">
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-20 w-32 h-32 border-4 border-dashed border-accent1 rounded-full opacity-50" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-dashed border-accent3 rounded-full opacity-30" />

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
              <PointyShape className="text-accent1 opacity-60 absolute -top-8 -right-12 w-16 h-16" />
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
            <div className="relative w-3/4 mx-auto">
              <PictureBorder className="absolute -inset-4 w-full h-full -m-3 text-main" />
              <img src={portrait} alt="Delphine Abouab" className="rounded-2xl w-full shadow-xl relative z-10"/>
              {/* Decorative tape effect */}
              <div className="absolute -top-3 right-12 w-16 h-8 bg-accent1/60 -rotate-12 shadow-md z-20" />
              <div className="absolute -bottom-3 left-12 w-16 h-8 bg-accent3/50 rotate-6 shadow-md z-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a junior software developer based in Paris with a background in industrial instrumentation.
              </p>
              <p className="text-lg leading-relaxed">
                After several years in the industry, I transitioned into software development to combine analytical thinking with creative problem-solving.
              </p>
              <p className="text-lg leading-relaxed">
                📚 Soon-to-be graduate of 42 Paris and alumnus of Le Wagon
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
