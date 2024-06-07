import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBarLinks = ({ label, links }) => {
  const navigate = useNavigate();

  return (
    <Typography
      sx={{
        color: '#F5F5F5',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '12px',
        cursor: 'pointer',
        transition: 'ease-in 0.1s',
        '&:hover': {
          scale: '1.1',
        },
      }}
      onClick={() => navigate(links)}
    >
      {label}
    </Typography>
  );
};

export default NavBarLinks;
