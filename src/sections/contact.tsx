import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
// import { ContactBorder } from '../assets/ui/borders';
// import { useState } from 'react';

export function Contact() {
  // const [formData, setFormData] = useState({ name: "", mail: "", msg: "" })

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/delphintech',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/delphine-abouab',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:delphine.abouab@outlook.fr',
    },
  ];

  // function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) {
  //   const {name, value} = event.target
  //   setFormData(prevFormData => ({
  //     ...prevFormData,
  //     [name]: value
  //   }))
  // }

  return (
    <section id="contact" className="py-32 px-6 bg_colored relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent2/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent1/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6">Contact me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'd love to hear from
            you! ☕
          </p>
        </motion.div>

        {/* Contact form with crafty style */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <ContactBorder className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none text-accent1/80" />
          <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
            {/* Decorative tape }
            <div className="absolute -top-4 left-20 w-20 h-10 bg-accent1/60 -rotate-12 shadow-md" />
            <div className="absolute -top-4 right-20 w-20 h-10 bg-accent3/40 rotate-12 shadow-md" />

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-muted/20 rounded-xl focus:border-accent1/50 focus:outline-none transition-colors"
                  placeholder="Jane Doe"
                  onChange={handleChange} value={formData.name} required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Email Address
                </label>
                <input
                  type="mail"
                  id="mail"
                  className="w-full px-4 py-3 border-2 border-muted/20 rounded-xl focus:border-accent1/50 focus:outline-none transition-colors"
                  placeholder="jane@example.com"
                  onChange={handleChange} value={formData.mail} required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-muted/20 rounded-xl focus:border-accent1/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  onChange={handleChange} value={formData.msg} required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-dark text-light py-4 rounded-xl font-medium hover:bg-dark/80 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div> */}

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          {/* <p className="text-dark/70 mb-6">Or connect with me on:</p> */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`p-4 bg-light rounded-xl shadow-md transition-all hover:text-dark hover:bg-muted/20`}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center text-dark"
        >
          <p className="flex items-center justify-center gap-2">
            Delphine Abouab © 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
