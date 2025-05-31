import React from 'react'
import { motion } from 'framer-motion';

const IconWhatsapp = () => {
	const whatsappNumber = '51987654321'; // tu número sin '+'
	const whatsappUrl = `https://wa.me/${whatsappNumber}`;	
	
  	return (
		<>
			{/* Icono flotante WhatsApp */}
	      <motion.a
	        href={whatsappUrl}
	        target="_blank"
	        rel="noopener noreferrer"
	        className="fixed bottom-6 right-8 lg:bottom-12 lg:right-20 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg cursor-pointer"
	        animate={{
	          y: [0, -20, 0], // rebota 10px arriba y vuelve
	        }}
	        transition={{
	          duration: 1.5,
	          repeat: Infinity,
	          ease: 'easeInOut',
	        }}
	        aria-label="Contacto WhatsApp"
	      >
	        {/* SVG WhatsApp */}
	        <svg
	          xmlns="http://www.w3.org/2000/svg"
	          className="w-8 h-8 lg:w-12 lg:h-12"
	          fill="currentColor"
	          viewBox="0 0 24 24"
	        >
	          <path d="M20.52 3.48A11.6 11.6 0 0012 0C5.37 0 0 5.37 0 12a11.52 11.52 0 001.66 6.13L0 24l5.95-1.56A11.89 11.89 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.21-3.48-8.52zM12 22c-2.04 0-4.02-.59-5.7-1.6l-.4-.24-3.52.92.94-3.43-.27-.38A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.15-6.14c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14s-.71.88-.87 1.06-.32.21-.6.07a8.3 8.3 0 01-2.44-1.5 9 9 0 01-1.67-2.07c-.18-.31 0-.48.13-.62.14-.14.32-.36.48-.55.15-.18.2-.31.3-.52a.96.96 0 00-.04-.55c-.09-.17-.62-1.5-.85-2.06-.22-.54-.44-.47-.62-.48a3.13 3.13 0 00-.56-.05c-.17 0-.45.06-.68.31s-.89.87-.89 2.13c0 1.25.91 2.46 1.04 2.63.14.17 1.79 2.73 4.33 3.82a17.33 17.33 0 002.24.7c.3.11.58.05.8-.03a1.52 1.52 0 00.56-.54c.17-.29.6-.52.68-1.03.08-.5.08-.93.06-1.03-.01-.1-.26-.15-.53-.29z" />
	        </svg>
	      </motion.a>
		</>
  	)
}

export default IconWhatsapp