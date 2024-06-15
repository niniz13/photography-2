import { TextField } from '@mui/material';

const CustomTextField = ({
  name,
  value,
  onChange,
  placeholder,
  height,
  multiline = false,
  rows = 1,
}) => {
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant='standard'
      multiline={multiline}
      rows={rows}
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
    />
  );
};

export default CustomTextField;
