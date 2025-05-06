import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ecommerce = [
  {
    title: "Material Bangunan",
    desc: "Kami menyediakan berbagai macam material bangunan berkualitas tinggi, mulai dari semen, cat, batu bata, keramik, pvc, dll untuk memenuhi kebutuhan proyek konstruksi Anda."
  },
  {
    title: "Alat-alat",
    desc: "Kami menyediakan berbagai macam peralatan seperti obeng, kunci pas, bor, gun taker,dll untuk memudahkan anda."
  },
  {
    title: "Spare part",
    desc: "Kami juga menyediakan berbagai spare part baik pompa, kloset, mesin cuci, motor, dan sepeda."
  }
];

const Ecommerce = () => (
  <Container className="py-5">
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
      <h2 className="text-center mb-4">Produk Kami</h2>
      <Row>
        {ecommerce.map((ecommerce, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{ecommerce.title}</Card.Title>
                  <Card.Text>{ecommerce.desc}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  </Container>
);


export default Ecommerce;
