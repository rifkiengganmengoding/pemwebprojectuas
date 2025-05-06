import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Team = () => (
  <Container className="py-5">
    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <h2 className="text-2xl font-bold mb-4">Tim Kami</h2>
      <ul className="list-disc pl-6">
        <li>H. Apud – Pemilik</li>
        <li>Bapak Dede – Manajer Operasional</li>
        <li>Ibu Sari – Layanan Pelanggan</li>
        <li>Pak Deni – Logistik & Pengiriman</li>
      </ul>
    </motion.div>
  </Container>
);

export default Team;