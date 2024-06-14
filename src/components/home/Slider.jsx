import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1200) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const calculateTransform = () => {
    return `translateX(-${(currentIndex * 100) / slidesToShow}%)`;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: calculateTransform(),
        }}
      >
        {images.map((item) => (
          <Box
            sx={{
              minWidth: '25%',
              boxSizing: 'border-box',
              padding: '0 10px',
            }}
          >
            <img
              style={{ width: '100%', height: 'auto', borderRadius: '32px' }}
              src={item}
            />
          </Box>
        ))}
      </Box>
      <Button
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          left: '10px',
          '&:disabled': {
            background: 'rgba(0, 0, 0, 0.2)',
            cursor: 'not-allowed',
          },
        }}
        disabled={currentIndex === 0}
        onClick={prevSlide}
      >
        ❮
      </Button>
      <Button
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          right: '10px',
          '&:disabled': {
            background: 'rgba(0, 0, 0, 0.2)',
            cursor: 'not-allowed',
          },
        }}
        disabled={currentIndex >= images.length - slidesToShow}
        onClick={nextSlide}
      >
        ❯
      </Button>
    </Box>
  );
};

export default Slider;
