import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => (
  <Container className="py-5">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center mb-4">Tentang Kami</h2>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Selamat datang di Mitra Griya Abadi</Card.Title>
              <Card.Text>
                Kami adalah toko bangunan yang telah berpengalaman dalam menyediakan berbagai material bangunan berkualitas tinggi
                dan layanan terbaik untuk membantu memenuhi kebutuhan proyek bangunan Anda.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </motion.div>
  </Container>
);

export default About;
