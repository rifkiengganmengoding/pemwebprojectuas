import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Projects = () => (
  <Container className="py-5">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-center mb-4">Proyek Kami</h2>
      <Row>
        {["Proyek 1", "Proyek 2", "Proyek 3"].map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{project}</Card.Title>
                  <Card.Text>
                    Deskripsi singkat tentang proyek yang kami kerjakan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  </Container>
);

export default Projects;
