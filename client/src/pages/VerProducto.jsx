import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productosData from '../../public/productos.json';

const VerProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = productosData.find(p => p.id === parseInt(id));

  if (!producto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-yellow-400">Producto no encontrado</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-400 px-6 py-3 rounded-md text-black font-semibold shadow-lg hover:bg-yellow-500 transition"
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Botón Volver solo visible en md+ */}
      <button
        onClick={() => navigate(-1)}
        className="hidden md:flex fixed top-50 left-120 bg-yellow-400 px-4 py-2 rounded-md shadow-lg text-black font-semibold hover:bg-yellow-500 transition cursor-pointer z-50"
        aria-label="Volver"
      >
        ← Volver
      </button>

      {/* Contenedor del producto */}
      <div className="rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden mt-16">
        {/* Imagen */}
        <img
          src={producto.image}
          alt={producto.name}
          className="w-full md:w-1/2 object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          loading="lazy"
        />

        {/* Detalles */}
        <div className="p-6 sm:p-10 flex flex-col justify-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-wide">
            {producto.name}
          </h1>
          <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg max-w-xl">
            {producto.description || 'Sin descripción disponible.'}
          </p>
          <p className="text-yellow-400 font-semibold text-lg sm:text-xl mb-4">
            Categoría: {producto.category}
          </p>
          {/* Puedes agregar más detalles aquí */}
        </div>
      </div>
    </div>
  );
};

export default VerProducto;
