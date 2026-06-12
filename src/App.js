import React, { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="portfolio-app-root">
      {/* Dynamic Header & Navigation Layout */}
      <header className="global-navbar">
        <div className="portfolio-logo">My Portfolio</div>
        <nav className="navigation-menu-links">
          <button 
            className={`nav-item-link ${activePage === 'home' ? 'is-active' : ''}`} 
            onClick={() => setActivePage('home')}
          >
            Home
          </button>
          <button 
            className={`nav-item-link ${activePage === 'projects' ? 'is-active' : ''}`} 
            onClick={() => setActivePage('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-item-link ${activePage === 'contact' ? 'is-active' : ''}`} 
            onClick={() => setActivePage('contact')}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Dynamic Page Content Injector */}
      <main className="main-viewport-content">
        {activePage === 'home' && <Home setActivePage={setActivePage}/>}
        {activePage === 'projects' && <About />}
        {activePage === 'contact' && <Contact />}
      </main>

      {/* Global Footer Area */}
      <footer className="footer-credits-bar">
        <p>© 2026 | IT Student Portfolio | ITUM, University of Moratuwa</p>
      </footer>
    </div>
  );
}

export default App;