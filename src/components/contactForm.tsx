import { motion } from 'motion/react';
import { ContactBorder } from '../assets/ui/borders';
import { useState } from 'react';
import { NotificationModal } from './notifModal';
import emailjs from '@emailjs/browser';


export function ContactForm() {
	const [formData, setFormData] = useState({ name: "", mail: "", msg: "" })
	const [ notif, setNotif ] = useState<{ show: boolean; type: 'success' | 'error'; text: React.ReactNode }>({ show: false, type: "success", text: <></> })

	function closeNotif() {
			setNotif(prevData => ({
			...prevData,
			['show']: false
			}))
		}

	function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) {
			const {name, value} = event.target
			setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
			}))
		}

		function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
			event.preventDefault()
			// Sending Mail
			emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			'#contactForm',
			import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
			.then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
			// Cleaning Form
			setFormData({ name: "", mail: "", msg: "" })
			// Success Alert
			setNotif({ show: true, type: 'success', text: <p>Merci pour votre message !</p> })
			}, function(error) {
			// Fail Alert
			setNotif({ show: true, type: 'error', text: <p>Oops ! Votre message n&apos;a pas été envoyé.<br /> Merci de réessayer</p> })
			console.log('FAILED...', error);
			});
		}

	return(
        <motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className="relative"
        >
			<ContactBorder className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none text-accent1/80" />
			<div className="relative bg-white p-10 rounded-3xl shadow-2xl">
			{/* Decorative tape */}
			<div className="absolute -top-4 left-20 w-20 h-10 bg-accent1/60 -rotate-12 shadow-md" />
			<div className="absolute -top-4 right-20 w-20 h-10 bg-accent3/40 rotate-12 shadow-md" />

			<form className="space-y-6" onSubmit={handleSubmit}>
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
				<NotificationModal isOpen={notif.show} onClose={closeNotif} type={notif.type} message={notif.text} />
				{/* <Send className="w-5 h-5" /> */}
				</motion.button>
			</form>
			</div>
		</motion.div>
	)
}
