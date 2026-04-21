import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Phone, FileUser } from 'lucide-react';
import cvFile from '../assets/CV_Delphine_Abouab - Logiciel.pdf';
// import { ContactForm } from '../components/contactForm';

export function Contact() {

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
	{
      icon: Phone,
      label: 'Phone',
      url: 'tel:+33679327751',
    },
	{
      icon: FileUser,
      label: 'CV',
      url: cvFile,
    }
  ];


  return (
    <section id="contact" className="py-32 px-6 bg_colored relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent1/30 rounded-full blur-3xl"/>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent2/20 rounded-full blur-3xl"/>

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
        {/* <ContactForm /> */}

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
                className={`p-4 bg-light rounded-xl shadow-md transition-all text-dark hover:bg-muted hover:text-light`}
                aria-label={link.label}
				title={link.label}
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
