import { Box, Typography } from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';
import React from "react";
import { useNavigate } from "react-router-dom";

const SectionAccueil = ({ title, date, description, path, item }) => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <article>
                <ImageListItem sx={{
                    transition: '0.3s ease',
                    '&:hover': {
                        opacity: '0.74',
                    },
                }}
                    key={item.img}
                    onClick={() => navigate(path)}>
                    <img
                        src={item.img}
                        srcSet={item.img}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            marginBottom: '39px',
                            objectFit: 'cover',
                        }}
                    />
                </ImageListItem>
            </article>
            <article>
                <h2>
                    {title}
                </h2>
                <span>
                    {date}
                </span>
                <p>
                    {description}
                </p>
                <Typography
                    sx={{
                        marginBottom: '100px',
                        cursor: 'pointer',
                        width: '60%',
                        color: '#303030',
                        textAlign: 'center',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontFamily: 'Montserrat, sans- serif',
                        fontSize: '11px',
                        lineHeight: '18px',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        display: 'block',
                    }}
                    onClick={() => navigate(path)}>
                    See More
                </Typography>
            </article>
        </React.Fragment >
    )
}

export default SectionAccueil;