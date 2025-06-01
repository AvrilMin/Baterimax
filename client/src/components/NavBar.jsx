import React, { useState } from 'react';

const NavBar = () => {
  	const [isOpen, setIsOpen] = useState(false);

	// Páginas para el scroll
  	const navItems = [
	    { href: '#home', label: 'Home' },
	    { href: '#products', label: 'Productos' },
	    { href: '#contact', label: 'Contacto' }
  	];

  	return (
    	<nav
      		className="sticky top-0 left-0 w-full backdrop-blur-md bg-transparent p-4 md:p-6 z-80 shadow-md"
      		aria-label="Main navigation"
    	>

      		<div className="max-w-7xl mx-auto flex items-center justify-between">

	        	{/* Logo */}
	        	<a
	          		href="#home"
	          		className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
	        	>
	          		BATERIMAX
	        	</a>

	        	{/* Botón hamburguesa para móvil */}
	        	<button
	          		onClick={() => setIsOpen(!isOpen)}
	          		className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
	          		aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
	          		aria-expanded={isOpen}
	        	>
		          	<svg
		            	className="w-8 h-8"
		            	fill="none"
		            	stroke="currentColor"
		            	viewBox="0 0 24 24"
		            	xmlns="http://www.w3.org/2000/svg"
		          	>
			            {isOpen ? (
			              	<path
			                	strokeLinecap="round"
			                	strokeLinejoin="round"
			                	strokeWidth={2}
			                	d="M6 18L18 6M6 6l12 12"
			              	/>
			            ) : (
			              	<path
			                	strokeLinecap="round"
			                	strokeLinejoin="round"
			                	strokeWidth={2}
			                	d="M4 6h16M4 12h16M4 18h16"
			              	/>
			            )}
	          		</svg>
        		</button>

		        {/* Menú navegación desktop */}
		        <ul className="hidden md:flex gap-12 text-white ml-4">
		          	{navItems.map((item) => (
			            <li key={item.href}>
			              	<a
			                	href={item.href}
			                	className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-300"
			              	>
			                	{item.label}
			              	</a>
			            </li>
		          	))}
		        </ul>

		    </div>

	      	{/* Menú navegación móvil */}
	      	{isOpen && (
		        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-black bg-opacity-90 p-4 rounded shadow-lg">
		          	{navItems.map((item) => (
			            <li key={item.href}>
			              	<a
				                href={item.href}
				                onClick={() => setIsOpen(false)} // Cierra menú al clicar
				                className="block text-white text-lg hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-300"
			              	>
			                	{item.label}
			              	</a>
			            </li>
		          	))}
		        </ul>
	      	)}
    	</nav>
  	);
};

export default NavBar;
