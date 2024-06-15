import { useState } from 'react';
import { Box, useMediaQuery, Grid, Typography } from '@mui/material';
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

      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          padding: '40px 20px',
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                textDecoration: 'underline',
              }}
            >
              Company
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              About
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Careers
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Newsroom
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                textDecoration: 'underline',
              }}
            >
              Features
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Speed
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Flexibility
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Gallery
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                textDecoration: 'underline',
              }}
            >
              Social
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Twitter
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Instagram
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Threads
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                textDecoration: 'underline',
              }}
            >
              Legal
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Terms
            </Typography>
            <Typography
              href='#'
              sx={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '14px',
                lineHeight: '160%',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Privacy
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Base;
