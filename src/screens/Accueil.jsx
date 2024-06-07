import Base from '../components/base/Base';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../components/CustomButton';

const Accueil = () => {
  return (
    <Base>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '25px',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              color: '#F5F5F5',
              fontFamily: 'Domine, serif',
              fontSize: '108px',
              lineHeight: '110%',
              letterSpacing: '-1%',
            }}
          >
            Capture the Night
          </Typography>
          <Typography
            sx={{
              color: '#F5F5F5',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '22px',
            }}
          >
            Embrace the Darkness.
          </Typography>
          <CustomButton label={'Explore Now'} links={'/'} />
        </Box>
      </Box>
    </Base>
  );
};

export default Accueil;
