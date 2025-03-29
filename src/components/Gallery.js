import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import './Gallery.css';

const galleryData = [
  {
    src: `${process.env.PUBLIC_URL}/26.png`,
    title: 'SBR - Blowing Machine',
    // description: 'Brief details about Company 01.',
  },
  {
    src: `${process.env.PUBLIC_URL}/34.png`,
    title: 'Ultra Filter- Natural Mineral water',
    // description: 'Brief details about Company 02.',
  },
  {
    src: `${process.env.PUBLIC_URL}/36.png`,
    title: 'Company 03',
    description: 'Brief details about Company 03.',
  },
  {
    src: `${process.env.PUBLIC_URL}/37.png`,
    title: 'Company 04',
    description: 'Brief details about Company 04.',
  },
  {
    src: `${process.env.PUBLIC_URL}/18.png`,
    title: 'Company 05',
    description: 'Brief details about Company 05.',
  },
  {
    src: `${process.env.PUBLIC_URL}/19.png`,
    title: 'Company 06',
    description: 'Brief details about Company 06.',
  },
  {
    src: `${process.env.PUBLIC_URL}/20.png`,
    title: 'Company 07',
    description: 'Brief details about Company 07.',
  },
  {
    src: `${process.env.PUBLIC_URL}/21.png`,
    title: 'Company 08',
    description: 'Brief details about Company 08.',
  },
  {
    src: `${process.env.PUBLIC_URL}/22.png`,
    title: 'Company 09',
    description: 'Brief details about Company 09.',
  },
  {
    src: `${process.env.PUBLIC_URL}/23.png`,
    title: 'Company 10',
    description: 'Brief details about Company 10.',
  },
  {
    src: `${process.env.PUBLIC_URL}/24.png`,
    title: 'Company 11',
    description: 'Brief details about Company 11.',
  },
  // Add more images and details as needed
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Gallery
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Explore our facilities, products, and manufacturing processes.
      </Typography>
      <Box className="gallery-grid">
        {galleryData.map((item, index) => (
          <Card key={index} className="gallery-item">
            <Box className="image-box">
              <CardMedia
                component="img"
                image={item.src}
                alt={item.title}
                className="gallery-image"
              />
            </Box>
            <CardContent>
              <Typography variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Gallery;
