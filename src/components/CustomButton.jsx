import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ label, links }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '360px',
        height: '57px',
        backgroundColor: '#A855F7',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'ease-in 0.1s',
        '&:hover': {
          scale: '1.05',
        },
      }}
      onClick={() => navigate(links)}
    >
      <Typography
        sx={{
          color: '#F5F5F5',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '18px',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CustomButton;
