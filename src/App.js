
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import ProjectsView from './Components/Projects/ProjectsView';
import AboutSection from './Components/About';
import ContactPage from './Components/Contact/ContactPage';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project" element={<ProjectsView />} />
          <Route exact path="/about" element={<AboutSection />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
