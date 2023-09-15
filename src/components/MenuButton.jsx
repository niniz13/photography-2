import { ListItemButton } from "@mui/material";
import React from 'react';

const MenuButton = ({ onClick, to, children }) => {
    return (
        <ListItemButton
            sx={{
                textAlign: 'center',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '7px 0',
                fontSize: '12px',
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: '18px',
                textDecoration: 'none',
                display: 'inline-block',
                color: '#959595',
                fontWeight: '700',
                transition: '0.3s ease',
                '&:hover': {
                    background: 'transparent',
                    color: '#303030',
                },
            }}
            onClick={onClick}
            to={to}
        >
            {children}
        </ListItemButton>
    );
};

export default MenuButton;
