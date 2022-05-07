import React, { useState } from 'react';
import NavTabs from './NavTabs.js';
import Home from './pages/home.js';
import AboutMe from './pages/aboutMe.js';
import Portfolio from './pages/portfolio.js';
import Contact from './pages/contact.js';
// import Header from './header.js';
// import Footer from './footer.js';
import Resume from './pages/resume.js';
import '../styles/style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
        return <Resume />;
  }; 

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* <Footer currentPage={currentPage} handlePageChange={handlePageChange} /> */}
    
      {renderPage()}
    </div>
  );
}