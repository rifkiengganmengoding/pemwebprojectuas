import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Team from '../pages/Team';
import Ecommerce from '../pages/Ecommerce';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/team" element={<Team />} />
    <Route path="/ecommerce" element={<Ecommerce/>} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRouter;
