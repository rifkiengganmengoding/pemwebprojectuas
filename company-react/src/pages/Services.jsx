import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Penyediaan Material Bangunan",
    desc: "Kami menyediakan berbagai macam material bangunan berkualitas tinggi untuk memenuhi kebutuhan proyek konstruksi Anda."
  },
  {
    title: "Pemesanan via WhatsApp",
    desc: "Proses pemesanan jadi lebih mudah dan praktis. Cukup hubungi kami lewat WhatsApp, dan tim kami siap membantu Anda kapan saja."
  },
  {
    title: "Pengiriman Barang Cepat & Aman",
    desc: "Kami menjamin proses pengiriman yang cepat dan aman hingga ke lokasi proyek Anda dengan sistem logistik yang terpercaya."
  }
];

const Services = () => (
  <Container className="py-5">
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
      <h2 className="text-center mb-4">Layanan Kami</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  </Container>
);

export default Services;
