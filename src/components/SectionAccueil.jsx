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
                    width: '900px',
                    height: '600px',
                    objectFit: 'cover',
                    marginBottom: '39px',
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
                <Typography onClick={() => navigate(path)}>
                    See More
                </Typography>
            </article>
        </React.Fragment>
    )
}

export default SectionAccueil;