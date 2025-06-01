import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import VerProducto from './pages/VerProducto';
import IconWhatsapp from './components/IconWhatsapp';

function MainPage() {
  // Páginas con scroll
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
	      	</Routes>
	    </>
  	);
}

export default App;
