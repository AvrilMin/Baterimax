import React from 'react'
import { motion } from 'framer-motion'
import Bateria3D from '../components/Bateria3D'

const Home = () => {
  return (
    <section id="home" className="min-h-[calc(100vh)] flex flex-col md:flex-row items-center justify-between md:px-50 gap-20
" >
      
      {/* Texto con animación */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="max-w-lg text-center md:text-left"
      >
        <h1 className="text-7xl md:text-6xl font-bold mb-8">
          Bienvenido a <span className="text-yellow-400">Baterimax</span>
        </h1>
        <p className="mb-6 text-lg leading-relaxed">
          Proveemos baterías de alta calidad para tu vehículo. Eficiencia, durabilidad y energía al máximo.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 cursor-pointer">
          Conoce nuestros productos
        </button>
      </motion.div>

      {/* Batería 3D */}
      <div className="flex items-center justify-center w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
        <Bateria3D />
      </div>

    </section>
  )
}

export default Home
