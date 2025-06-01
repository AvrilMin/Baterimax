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

	    	<section 
		  		id="home" 
		  		className="flex flex-col justify-center items-center gap-12 md:flex-row md:justify-between  lg:px-70 md:mx-10 sm:mx-4"
		  		style={{ minHeight: 'calc(100vh - 80px)' }}
			>
		      
		      	{/* Texto con animación */}
		      	<motion.div
		        	initial={{ opacity: 0, x: -100 }}
		       		animate={{ opacity: 1, x: 0 }}
		        	transition={{ duration: 2 }}
		        	className="text-center md:text-left mt-40 md:mt-0 "
		      	>

			        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
			          	Bienvenido a <span className="text-yellow-400">Baterimax</span>
			        </h1>
			        <p className="mb-6 text-lg leading-relaxed text-[15px] lg:text-[20px] px-2 mb-10">
			          	Proveemos baterías de alta calidad para tu vehículo. <br />Eficiencia, durabilidad y energía al máximo.
			        </p>
			        <a
					  	href="#products"
					  	className="relative inline-block px-5 py-4 rounded-lg font-semibold text-black text-center lg:text-[20px] transition-all duration-300 ease-in-out
					  	bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-[length:200%_200%] hover:bg-[position:right_center]
					  	shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105"
					>
					  	<span className="relative z-10">Conoce nuestros productos</span>
					  	<span className="absolute inset-0 rounded-lg bg-yellow-400 opacity-30 blur-md animate-pulse"></span>
					</a>

		      	</motion.div>

		      	{/* Batería 3D */}
		      	<div className="flex items-center justify-center w-[300px] h-[600px] md:w-[500px] md:h-[500px]">
		        	<Bateria3D />
		      	</div>

	    	</section>


			{/* Sección de info */}
			<section className="relative bg-black text-white py-20 px-6 md:px-20 lg:px-40 overflow-hidden mb-20 mt-20 md:mt-15">
			  	{/* Imagen de fondo */}
			  	<div className="absolute inset-0">
				    <img
				      	src="/assets/mechanic.jpg"
				      	alt="Fondo mecánico"
				      	className="w-full h-full object-cover"
				    />
				    {/* Overlay completamente oscuro */}
				    <div className="absolute inset-0 bg-black opacity-80"></div>
			  	</div>

  				{/* Contenido encima del fondo */}
  				<div className="relative max-w-6xl mx-auto text-center md:text-left space-y-8">
				    <motion.h2
				      	className="text-4xl font-extrabold mb-6 text-yellow-400"
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
					    "Contáctanos para asesorarte en la solución perfecta para tu vehículo."

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
