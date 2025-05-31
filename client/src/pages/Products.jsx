import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Hook para debounce sencillo
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

const Productos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputFiltroCategoria, setInputFiltroCategoria] = useState('All');

  // Debounce para filtro de categoría
  const categoriaFiltro = useDebounce(inputFiltroCategoria, 300);

  // Cargar productos al inicio
  useEffect(() => {
    fetch('/productos.json')
      .then(res => res.json())
      .then(data => {
        // Limpiar espacios en categorías
        const productosLimpios = data.map(producto => ({
          ...producto,
          category: producto.category.trim(),
        }));
        setProductos(productosLimpios);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      });
  }, []);

  // Categorías disponibles
  const categorias = ['All', 'Baterías', 'Cargadores', 'Accesorios'];

  // Filtrar productos por categoría y búsqueda, memoizado para mejor rendimiento
  const productosFiltrados = useMemo(() => {
    const filtroCategoria = categoriaFiltro.toLowerCase();
    const filtroBusqueda = searchQuery.trim().toLowerCase();

    return productos.filter(producto => {
      const coincideCategoria =
        filtroCategoria === 'all' ||
        producto.category.toLowerCase() === filtroCategoria;

      const coincideBusqueda =
        producto.name.toLowerCase().includes(filtroBusqueda) ||
        producto.category.toLowerCase().includes(filtroBusqueda);

      return coincideCategoria && coincideBusqueda;
    });
  }, [productos, categoriaFiltro, searchQuery]);

  	return (
    <section id="products" className="min-h-screen text-white p-8">
      	{/* Título con animación */}
	    <motion.h2
	        className="text-4xl font-bold mb-10 text-center"
	        initial={{ opacity: 0, y: -80 }}
	        whileInView={{ opacity: 1, y: 0 }}
	        viewport={{ once: true, amount: 0.9 }}
	        transition={{ duration: 1 }}
	    >
	    	Nuestros Productos
	    </motion.h2>

      	{/* Barra de búsqueda */}
      	<div className="flex flex-col md:flex-row justify-between gap-4 mb-14">
	        <div className="flex flex-grow justify-center gap-4">
	          <input
	            type="text"
	            placeholder="Buscar productos..."
	            value={searchQuery}
	            onChange={e => setSearchQuery(e.target.value)}
	            className="border border-gray-500 bg-black bg-opacity-50 text-white rounded-lg px-4 py-2 w-full max-w-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
	          />
	        </div>
      	</div>

      	{/* Botones de categorías */}
      	<div className="flex flex-wrap gap-4 mb-6">
	        {categorias.map(categoria => (
	          <button
	            key={categoria}
	            onClick={() => setInputFiltroCategoria(categoria)}
	            className={`px-4 py-2 rounded-lg cursor-pointer border border-yellow-400 transition-colors duration-200 ${
				  categoriaFiltro === categoria
				    ? 'bg-yellow-400 text-black font-bold'   // <-- fondo amarillo PERMANENTE cuando está activo
				    : 'bg-transparent text-white hover:bg-yellow-500 font-bold'  // <-- para inactivo
				}`}

	          >
	            {categoria}
	          </button>
	        ))}
      	</div>

    {/* Lista de productos filtrados */}
	{loading ? (
	  <p>Cargando productos...</p>
	) : productosFiltrados.length > 0 ? (
	  	<div
	    	className="grid gap-8 justify-center"
	    	style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
	  	>
	    	{productosFiltrados.map(p => (
	            <div
	                key={p.id}
	                className="bg-black bg-opacity-70 p-4 rounded shadow-lg p-4"
	            >
		           	<img
		                src={p.image}
		                alt={p.name}
		                loading="lazy"  
		                className="w-full h-60 object-cover rounded mb-4"
		            />
		                <h3 className="text-xl font-bold">{p.name}</h3>
		                <p className="text-sm text-gray-400">{p.category}</p>
		                <button className="mt-2 px-4 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 cursor-pointer">
		                  	Ver más
		                </button>
	              	</div>
	            ))}

	  	</div>
	) : (
	  <p>No se encontraron productos.</p>
	)}

    </section>
  );
};

export default Productos;
