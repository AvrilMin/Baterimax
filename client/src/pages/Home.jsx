import React from 'react'
import { motion } from 'framer-motion'
import Bateria3D from '../components/Bateria3D'

const Home = () => {
  return (
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
  )
}

export default Home
