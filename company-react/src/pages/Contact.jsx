import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => (
  <Container className="py-5">
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
      <h2 className="text-center mb-4">Hubungi Kami</h2>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama Anda" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email Anda" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Tulis pesan Anda" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Kirim Pesan
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h5>Alamat Kami</h5>
          <p>Jl. Raya No.123, Cirebon, Indonesia</p>
          <p>📱 WhatsApp: 08xx-xxxx-xxxx</p>
          <p>📧 Email: mitragriyaabadi@email.com</p>
          <p>🕒 Jam Operasional: Senin - Sabtu, 08.00 - 17.00</p>
        </Col>
      </Row>
    </motion.div>
  </Container>
);

export default Contact;
