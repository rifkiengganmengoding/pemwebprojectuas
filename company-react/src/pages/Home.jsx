import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <motion.div
    className="bg-primary text-white text-center py-5"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-3xl font-bold">Selamat Datang di Mitra Griya Abadi</h1>
    <p className="mt-4">Kami adalah toko bangunan terpercaya di Cirebon yang menyediakan berbagai kebutuhan konstruksi dan renovasi. Dari bahan bangunan hingga peralatan, semua tersedia dengan harga bersahabat dan kualitas terjamin.</p>
  </motion.div>
);

export default Home;
