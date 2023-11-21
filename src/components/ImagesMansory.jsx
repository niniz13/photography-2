import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImagesMansory = ({ itemData }) => {
    const [cols, setCols] = useState(2);

    useEffect(() => {
        const updateCols = () => {
            if (window.innerWidth <= 650) {
                setCols(1);
            }
        };

        updateCols();

        window.addEventListener('resize', updateCols);

        return () => {
            window.removeEventListener('resize', updateCols);
        };
    }, []);

    return (
        <Box sx={{
            margin: "0 3em",
        }}>
            <ImageList variant="masonry" cols={cols} gap={20}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
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