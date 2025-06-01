import React from 'react'
import { motion } from 'framer-motion'
import Bateria3D from '../components/Bateria3D'

const Home = () => {
	const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
}
  return (
  <>
	    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between lg:px-20 gap-12 lg:mx-70 md:mx-10 sm:mx-4
	" >
	      
	      {/* Texto con animación */}
	      <motion.div
	        initial={{ opacity: 0, x: -100 }}
	        animate={{ opacity: 1, x: 0 }}
	        transition={{ duration: 2 }}
	        className="text-center md:text-left mt-40 md:mt-10 "
	      >
	        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
	          Bienvenido a <span className="text-yellow-400">Baterimax</span>
	        </h1>
	        <p className="mb-6 text-lg leading-relaxed text-[15px] lg:text-[20px] px-2">
	          Proveemos baterías de alta calidad para tu vehículo. <br />Eficiencia, durabilidad y energía al máximo.
	        </p>
	        <button className="bg-yellow-400 text-black font-semibold px-5 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 lg:text-[20px]">
	          Conoce nuestros productos
	        </button>
	      </motion.div>

	      {/* Batería 3D */}
	      <div className="flex items-center justify-center w-[300px] h-[600px] md:w-[500px] md:h-[500px]">
	        <Bateria3D />
	      </div>

	    </section>

		 {/* Sección "Sobre Nosotros" con animaciones y fondo dinámico */}
      <section className="relative bg-gradient-to-br from-black via-[#141414] to-[#2a2a2a] text-white py-20 px-6 md:px-20 lg:px-40 overflow-hidden mb-20
">
        {/* SVG decorativo top-left */}
        <svg
          className="absolute top-0 left-0 w-64 h-64 opacity-20"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="#facc15" />
        </svg>

        {/* SVG decorativo bottom-right */}
        <svg
          className="absolute bottom-0 right-0 w-72 h-72 opacity-20"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" rx="50" fill="#fbbf24" />
        </svg>

        <div className="relative max-w-6xl mx-auto text-center md:text-left space-y-8">
          <motion.h2
            className="text-4xl font-extrabold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Sobre Baterimax
          </motion.h2>

          {[
            "En Baterimax nos dedicamos a brindar soluciones energéticas confiables y duraderas. Contamos con más de 9 años de experiencia en la industria de baterías para vehículos, sistemas solares y equipos industriales.",
            "Nuestra misión es entregar productos de la más alta calidad que garanticen el mejor rendimiento y seguridad para nuestros clientes. Nos comprometemos con la innovación y el servicio personalizado para cada necesidad.",
            "Contáctanos para asesorarte en la solución perfecta para tu vehículo.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-lg leading-relaxed max-w-4xl mx-auto md:mx-0"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>
  </>
  )
}

export default Home
