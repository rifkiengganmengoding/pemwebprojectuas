import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-dark text-light py-4 mt-5"
  >
    <Container>
      <Row>
        <Col md={6}>
          <h5>Mitra Griya Abadi</h5>
          <p>Toko Bangunan Haji Apud - Solusi Kebutuhan Material Anda</p>
        </Col>
        <Col md={6} className="text-md-end">
          <p>&copy; {new Date().getFullYear()} Mitra Griya Abadi. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </motion.footer>
);

export default Footer;
