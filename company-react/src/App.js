import React from 'react';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';

const App = () => (
  <>
    <NavigationBar />
    <AppRouter />
    <Footer />
  </>
);

export default App;
