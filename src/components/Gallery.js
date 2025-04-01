import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './Gallery.css';

const galleryData = [
  {
    src: `${process.env.PUBLIC_URL}/26.png`,
    title: 'SBR - Blowing Machine',
    description: 'Using SBR PET Blowing Machines (capacity: 7200 bottles/hour), we manufacture high-quality bottles on-site to maintain control over the integrity and quality of our packaging. The process is fully automated and monitored to minimize human contact.',
  },
  {
    src: `${process.env.PUBLIC_URL}/28.png`,
    title: 'Soda PET Blowing Machine – CSD Line',
    description: 'High-efficiency SBR PET Blowing Machine (7200 BPH) dedicated to producing PET bottles for carbonated soft drinks, ensuring uniformity and strength for pressure-based beverages.',
  },
  {
    src: `${process.env.PUBLIC_URL}/34.png`,
    title: 'Ultra Filter- Natural Mineral water',
    description: 'Our Ultra Filtration (UF) System, a critical part of our water purification process, manufactured by Purewatertech, has a capacity of 10 KL and removes suspended solids, bacteria, and viruses while preserving essential minerals.',
  },
  {
    src: `${process.env.PUBLIC_URL}/36.png`,
    title: 'Main Entrance – Kingfisher Plant',
    description: 'The front gate of our Clean Water & Allied Products Pvt. Ltd. facility proudly showcases our flagship brand Kingfisher Packaged Drinking Water in a green, eco-friendly setting.',
  },
  {
    src: `${process.env.PUBLIC_URL}/38.png`,
    title: 'Administrative Block – Head Office',
    description: 'The central office building of Clean Water & Allied Products Pvt. Ltd., where management, quality control, and client coordination operations take place.',
  },
  {
    src: `${process.env.PUBLIC_URL}/18.png`,
    title: 'Bottle Filling & Packaging Line',
    description: 'Our filling lines, equipped with SATJAI Bottling machines (120 BPM), are operated by trained staff maintaining strict hygiene standards and wearing protective gear for contamination-free handling.',
  },
  {
    src: `${process.env.PUBLIC_URL}/19.png`,
    title: 'Jar Filling & Large Volume Handling',
    description: 'Utilizing 20-Litre Jar Filling Machines with CIM Technology, capable of handling 400 jars per hour, to cater to bulk requirements from institutions and commercial clients.',
  },
  {
    src: `${process.env.PUBLIC_URL}/20.png`,
    title: 'Automatic Rinser Filler Capper – Water Line',
    description: 'A fully automated machine that rinses, fills, and caps water bottles in a single streamlined process ensuring hygiene and speed in packaging.',
  },
  {
    src: `${process.env.PUBLIC_URL}/27.png`,
    title: 'Juice Bottling Line – Upcoming Product Section',
    description: 'A dedicated line for the upcoming Himalayan Clean Juice range, designed for hygienic and high-speed bottling across multiple SKUs from 160ml to 2000ml.',
  },
  {
    src: `${process.env.PUBLIC_URL}/22.png`,
    title: 'PET Bottle Blowing Section – SBR Machine',
    description: 'A fully automated SBR PET Blowing Machine with a capacity of 7200 bottles/hour, ensuring in-house production of bottles with rigorous quality and hygiene control.',
  },
  {
    src: `${process.env.PUBLIC_URL}/23.png`,
    title: 'Water Filling Machine – SATJAI Bottling',
    description: 'A high-speed SATJAI Bottling Machine (120 BPM) used for the hygienic and efficient filling of packaged drinking water bottles.',
  },
  {
    src: `${process.env.PUBLIC_URL}/24.png`,
    title: 'Carbonated Soda Filling Line – CSD Section',
    description: 'An automated Hiemense Bottling Line with a capacity of 200 BPM, dedicated to filling and packaging carbonated beverages like Jeera Soda and Energy Drinks.',
  },
  // Add more images and details as needed
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  // Function to truncate description text to a specified length
  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <Container className="py-5">
      <header className="text-center header-spacing">
        <h1 className="display-4">Gallery</h1>
        <p className="lead">
          Explore our facilities, products, and manufacturing processes.
        </p>
      </header>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {galleryData.map((item, index) => (
          <Col key={index} className="animate__animated animate__fadeInUp">
            <Card className="h-100 shadow-sm gallery-card">
              <Card.Img 
                variant="top" 
                src={item.src} 
                alt={item.title} 
                className="gallery-img"
                onClick={() => handleOpenModal(item)}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="small-description">
                  {truncate(item.description, 80)}
                </Card.Text>
                <Button variant="link" onClick={() => handleOpenModal(item)}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedItem && (
        <Modal 
          show={showModal} 
          onHide={handleCloseModal} 
          centered 
          size="lg" 
          animation={true}
        >
          <Modal.Header closeButton className="modal-header-custom">
            <Modal.Title>{selectedItem.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              src={selectedItem.src} 
              alt={selectedItem.title} 
              className="img-fluid modal-img" 
            />
            <p className="mt-3">{selectedItem.description}</p>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default Gallery;
