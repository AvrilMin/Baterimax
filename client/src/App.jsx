import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Products />
      <Contact />
    </>
  );
}

export default App;
