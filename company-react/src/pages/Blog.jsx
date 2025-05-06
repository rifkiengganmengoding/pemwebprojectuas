import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const blog = [
  {
    title: "Tips Merancang Struktur Bangunan Bertingkat",
    desc: "Berikut adalah beberapa tips yang bisa Anda terapkan dalam merancang struktur bangunan bertingkat agar tetap kuat dan aman. Pentingnya Struktur Bangunan Bertingkat yang Kokoh. Struktur bangunan bertingkat memiliki beban yang …lihat selengkapnya"
  },
  {
    title: "8 Tips Membangun Rumah Impian",
    desc: "Inilah beberapa tips membangun rumah baru yang perlu diperhatikan... lihat selengkapnya"
  },
  {
    title: "Struktur Bangunan: Panduan Lengkap untuk Pemula",
    desc: "Tips Praktis Memulai Belajar Struktur Bangunan. Buat kamu yang baru mulai belajar struktur bangunan, berikut beberapa tips dari pengalaman kami.…. lihat selengkapnya"
  },
];

const Blog = () => (
  <Container className="py-5">
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
      <h2 className="text-center mb-4">Layanan Kami</h2>
      <Row>
        {blog.map((blog, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.desc}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  </Container>
);
export default Blog;
