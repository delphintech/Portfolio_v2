import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
}

export function NotificationModal({ isOpen, onClose, type, message }: NotificationModalProps) {
  const isSuccess = type === 'success';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-md"
            >
              {/* Hand-drawn border */}
              <svg
                className="absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none"
                viewBox="0 0 500 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M10 12 L490 8 L495 290 L15 295 Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  className={isSuccess ? 'text-green-400' : 'text-red-400'}
                  strokeLinecap="round"
                  fill="white"
                />
              </svg>

              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Decorative tape */}
                <div className={`absolute -top-3 left-12 w-16 h-8 ${isSuccess ? 'bg-green-200/60' : 'bg-red-200/60'} -rotate-12 shadow-md`} />

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', duration: 0.6, delay: 0.2 }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${
                      isSuccess
                        ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                        : 'bg-gradient-to-br from-red-400 to-rose-500'
                    } shadow-lg`}
                  >
                    {isSuccess ? (
                      <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
                    ) : (
                      <XCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                    )}
                  </motion.div>
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-center mb-3 text-gray-900"
                >
                  {isSuccess ? 'Message Sent! 🎉' : 'Oops! Something went wrong'}
                </motion.h3>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center text-gray-600 mb-6 leading-relaxed"
                >
                  {message}
                </motion.p>

                {/* Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-medium shadow-md transition-all ${
                    isSuccess
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Got it!
                </motion.button>

                {/* Decorative corner element */}
                <div className={`absolute bottom-4 right-4 w-8 h-8 ${isSuccess ? 'bg-green-100' : 'bg-red-100'} -rotate-12 opacity-50 rounded-lg`} />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}