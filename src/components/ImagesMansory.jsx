import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImagesMansory = ({ itemData, handleOpen, setIndex }) => {
    const [cols, setCols] = useState(2);
    const isSmallScreen = useMediaQuery('(max-width:1050px)');


    useEffect(() => {
        const updateCols = () => {
            if (window.innerWidth <= 650) {
                setCols(1);
            } else {
                setCols(2);
            }
        };

        updateCols();

        window.addEventListener('resize', updateCols);

        return () => {
            window.removeEventListener('resize', updateCols);
        };
    }, []);

    const handleClick = (index) => () => {
        setIndex(index);
        handleOpen();
    };

    return (
        <Box sx={{
            margin: "0 3em",
        }}>
            <ImageList variant="masonry" cols={cols} gap={30}>
                {itemData.map((item, index) => (
                    <ImageListItem sx={{
                        transition: "ease 0.4s",
                        ...(isSmallScreen ? { cursor: "default" } : { cursor: "pointer" }),
                        ...(isSmallScreen ? { '&:hover': { opacity: 1 } } : { '&:hover': { opacity: 0.5 } })
                    }} key={item.img} onClick={handleClick(index)} >
                        <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default ImagesMansory;