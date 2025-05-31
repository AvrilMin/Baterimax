import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('All');

  useEffect(() => {
    fetch('/productos.json')  // Asegúrate de que el archivo esté en /public
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      });
  }, []);

  // Categorías disponibles
  const categorias = ['All', 'Baterías', 'Cargadores', 'Accesorios', 'KitsEnergía', 'Paneles Solares'];

  // Filtrado por categoría y búsqueda
  const productosFiltrados = productos.filter(producto => {
  const categoriaNormalizada = (producto.category || '').toLowerCase().trim();
  const categoriaFiltro = categoriaSeleccionada.toLowerCase().trim();
  const categoriaMatch = categoriaSeleccionada === 'All' || categoriaNormalizada === categoriaFiltro;
  const searchMatch = producto.name.toLowerCase().includes(searchQuery.toLowerCase());
  return categoriaMatch && searchMatch;
});


  return (
    <section id="products" className="min-h-screen text-white p-8">
      {/* Título con animación */}
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        Nuestros Productos
      </motion.h2>

      {/* Barra de búsqueda */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex flex-grow justify-center gap-4">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="border border-gray-500 bg-black bg-opacity-50 text-white rounded-lg px-4 py-2 w-full max-w-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
          />
          <button
            onClick={() => setSearchQuery('')}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg px-4 py-2 w-28 transition-all"
          >
            Limpiar
          </button>
        </div>
      </div>

      {/* Categorías */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categorias.map(categoria => (
          <button
            key={categoria}
            onClick={() => setCategoriaSeleccionada(categoria)}
            className={`px-4 py-2 rounded-lg transition-all ${
              categoriaSeleccionada === categoria
                ? 'bg-yellow-500 text-black font-bold'
                : 'bg-yellow-400 hover:bg-yellow-500'
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Productos filtrados */}
      {loading ? (
        <p>Cargando productos...</p>
      ) : productosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productosFiltrados.map((producto, index) => (
            <motion.div
              key={producto.id}
              className="bg-black bg-opacity-70 p-4 rounded shadow-lg"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <img
                src={producto.image}
                alt={producto.name}
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">{producto.name}</h3>
              <p className="text-sm text-gray-400">{producto.category}</p>
              <button className="mt-2 px-4 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500">
                Ver más
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </section>
  );
};

export default Productos;
