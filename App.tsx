
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import CustomScrollbar from './components/CustomScrollbar';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if preloader has already run in this session
    return !sessionStorage.getItem('hasPreloaded');
  });

  if (isLoading) {
    return <Preloader onComplete={() => {
      setIsLoading(false);
      sessionStorage.setItem('hasPreloaded', 'true');
    }} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden">
        <CustomScrollbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
