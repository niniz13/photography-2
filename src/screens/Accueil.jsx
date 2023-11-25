import Base from "../components/Base"
import ImagesMansory from "../components/ImagesMansory";
import React, { useState } from 'react';
import { Box, IconButton, Modal, useMediaQuery } from "@mui/material";
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
    const [leftToRight, setLeftToRight] = useState(true);

    const isSmallScreen = useMediaQuery('(max-width:1050px)');

    const handleOpen = () => {
        if (!isSmallScreen) {
            setOpen(true);
        }
    }

    const handleClose = () => setOpen(false);

    const transitions = useTransition(index, {
        from: { opacity: 1, transform: leftToRight ? 'translateX(100%)' : 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: leftToRight ? 'translateX(-100%)' : 'translateX(100%)' },
        config: { duration: 100 },
    });

    const nextSlide = () => {
        setIndex((state) => (state + 1) % itemData.length);
        setLeftToRight(true)
    };

    const previousSlide = () => {
        setIndex((state) => (state - 1 + itemData.length) % itemData.length);
        setLeftToRight(false)
    };

    return (
        <Base>
            <ImagesMansory itemData={itemData} handleOpen={handleOpen} setIndex={setIndex} />

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
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                    {transitions((style, i) => (
                        <animated.div
                            key={i}
                            style={{
                                ...style,
                                position: "absolute",
                                width: "auto",
                                height: "80vh",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={itemData[index].img}
                                alt={`Image ${i}`}
                            />
                        </animated.div>
                    ))}
                    <IconButton sx={{
                        position: "absolute",
                        left: "0",
                        marginLeft: "1em"
                    }} onClick={previousSlide}>
                        <ArrowCircleLeftIcon sx={{
                            fontSize: "1.5em",
                            color: "#fff"
                        }} />
                    </IconButton>
                    <IconButton sx={{
                        position: "absolute",
                        right: "0",
                        marginRight: "1em"
                    }} onClick={nextSlide}>
                        <ArrowCircleRightIcon sx={{
                            fontSize: "1.5em",
                            color: "#fff"
                        }} />
                    </IconButton>
                </Box>
            </Modal>
        </Base>
    )
}

export default Accueil;