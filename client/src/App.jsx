import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import VerProducto from './pages/VerProducto';
import IconWhatsapp from './components/IconWhatsapp';

function MainPage() {
  // Aquí pones todo lo que quieres en la página principal con scroll
  return (
    <>
      <Home />
      <Products />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <IconWhatsapp />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/producto/:id" element={<VerProducto />} />
        {/* otras rutas si hay */}
      </Routes>
    </>
  );
}

export default App;
