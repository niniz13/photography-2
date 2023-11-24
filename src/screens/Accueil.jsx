import Base from "../components/Base"
import ImagesMansory from "../components/ImagesMansory";
import React, { useState } from 'react';
import { Box, IconButton, Modal } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { animated, useTransition } from '@react-spring/web';

const Accueil = () => {

    const itemData = [
        {
            img: "img/IMG_3319.webp",
            title: "Image",
        },
        {
            img: "img/IMG_1328.webp",
            title: "Image",
        },
        {
            img: "img/IMG_1385.webp",
            title: "Image",
        },
        {
            img: "img/IMG_2651.webp",
            title: "Image",
        },
        {
            img: "img/IMG_2884.webp",
            title: "Image",
        },
        {
            img: "img/IMG_2789.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3092.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3499.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3517.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3628.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3641.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3644.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3722.webp",
            title: "Image",
        },
        {
            img: "img/IMG_3725.webp",
            title: "Image",
        }
    ]

    const [index, setIndex] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const transitions = useTransition(index, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const nextSlide = () => {
        setIndex((state) => (state + 1) % itemData.length);
    };

    const previousSlide = () => {
        setIndex((state) => (state - 1 + itemData.length) % itemData.length);
    };

    return (
        <Base>
            <ImagesMansory itemData={itemData} handleOpen={handleOpen} />

            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    border: "none",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.6)"
                }}
            >
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {transitions((style, i) => (
                        <animated.div
                            key={i}
                            style={{
                                ...style,
                                position: "absolute",
                                width: "800px",
                                height: "500px",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                src={itemData[index].img}
                                alt={`Image ${i}`}
                            />
                        </animated.div>
                    ))}
                    <Box sx={{
                        width: "90vw",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <IconButton sx={{
                        }} onClick={previousSlide}>
                            <ArrowCircleLeftIcon sx={{
                                fontSize: "1.5em",
                                color: "#fff"
                            }} />
                        </IconButton>
                        <IconButton sx={{
                        }} onClick={nextSlide}>
                            <ArrowCircleRightIcon sx={{
                                fontSize: "1.5em",
                                color: "#fff"
                            }} />
                        </IconButton>
                    </Box>
                </Box>
            </Modal>
        </Base>
    )
}

export default Accueil;