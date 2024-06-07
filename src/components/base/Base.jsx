import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBarLinks from './NavBarLinks';
import NavBarTitle from './NavBarTitle';

const Base = ({ children }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:1050px)');

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <Box
      container
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000',
      }}
    >
      <Box
        navbar
        sx={{
          width: '100vw',
          // height: '100px',
          padding: '20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '25px',
          }}
        >
          <NavBarLinks label={'Home'} links={'/'} />
          <NavBarLinks label={'Gallery'} links={'/gallery'} />
          <NavBarLinks label={'Gear'} links={'/gear'} />
        </Box>
        <NavBarTitle />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '25px',
          }}
        >
          <NavBarLinks label={'About'} links={'/about'} />
          <NavBarLinks label={'Contact'} links={'/contact'} />
          <NavBarLinks label={'To define'} links={'/'} />
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Base;
