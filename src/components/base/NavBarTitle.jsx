import { Box, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from 'react-router-dom';

const NavBarTitle = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        cursor: 'pointer',
        transition: 'ease-in 0.1s',
        '&:hover': {
          scale: '1.05',
        },
      }}
      onClick={() => navigate('/')}
    >
      <LightModeIcon sx={{ color: '#F5F5F5' }} />
      <Typography
        sx={{
          color: '#F5F5F5',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '16px',
        }}
      >
        Jérémy Gross
      </Typography>
    </Box>
  );
};

export default NavBarTitle;
