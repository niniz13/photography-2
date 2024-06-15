import { TextField } from '@mui/material';

const CustomTextField = ({ placeholder, height }) => {
  return (
    <TextField
      InputProps={{
        sx: {
          width: '520px',
          height: height,
          padding: '16px',
          borderRadius: '8px',
          color: '#F5F5F5',
          border: 'solid 1px #4B5563',
          '&:before': {
            border: 'none',
          },
          '&:after': {
            border: 'none',
          },
          '&:hover:not(.Mui-disabled):before': {
            border: 'none',
          },
        },
      }}
      placeholder={placeholder}
      variant='standard'
    />
  );
};

export default CustomTextField;
