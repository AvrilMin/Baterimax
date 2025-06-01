import React from 'react';

const Contactame = () => {
  const phoneNumber = '51987654321'; // Tu número WhatsApp sin '+'
  const message = encodeURIComponent('Hola, quiero más información sobre sus productos.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const facebookUrl = 'https://www.facebook.com/tuPaginaFacebook'; // Cambia por tu URL Facebook

  return (
    <section
      id="contact"
      className="bg-black/20 text-white p-6 sm:p-10 md:p-16 mx-4 sm:mx-10 md:mx-40 my-10 rounded-lg"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
        Contacto
      </h2>
      <p className="max-w-md mx-auto md:mx-0 mb-8 text-center md:text-left text-base sm:text-lg text-gray-300">
        ¿Tienes dudas o quieres hacer un pedido? Escríbenos por WhatsApp o visita nuestra página de Facebook.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-md mx-auto md:mx-0">
        {/* Botón WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center justify-center space-x-3 transition-colors duration-300 flex-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.6 11.6 0 0012 0C5.37 0 0 5.37 0 12a11.52 11.52 0 001.66 6.13L0 24l5.95-1.56A11.89 11.89 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.21-3.48-8.52zM12 22c-2.04 0-4.02-.59-5.7-1.6l-.4-.24-3.52.92.94-3.43-.27-.38A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.15-6.14c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14s-.71.88-.87 1.06-.32.21-.6.07a8.3 8.3 0 01-2.44-1.5 9 9 0 01-1.67-2.07c-.18-.31 0-.48.13-.62.14-.14.32-.36.48-.55.15-.18.2-.31.3-.52a.96.96 0 00-.04-.55c-.09-.17-.62-1.5-.85-2.06-.22-.54-.44-.47-.62-.48a3.13 3.13 0 00-.56-.05c-.17 0-.45.06-.68.31s-.89.87-.89 2.13c0 1.25.91 2.46 1.04 2.63.14.17 1.79 2.73 4.33 3.82a17.33 17.33 0 002.24.7c.3.11.58.05.8-.03a1.52 1.52 0 00.56-.54c.17-.29.6-.52.68-1.03.08-.5.08-.93.06-1.03-.01-.1-.26-.15-.53-.29z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Botón Facebook */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center justify-center space-x-3 transition-colors duration-300 flex-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.494v-9.294h-3.125v-3.622h3.125v-2.671c0-3.097 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123v9.294h6.116c.73 0 1.324-.592 1.324-1.324v-21.35c0-.733-.594-1.325-1.325-1.325z" />
          </svg>
          <span>Facebook</span>
        </a>
      </div>
    </section>
  );
};

export default Contactame;
