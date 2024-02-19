import Base from "../components/Base"
import React from 'react';
import { Box, Typography, useMediaQuery } from "@mui/material";

const Gears = () => {

    const photoItems = [
        {
            img: "img/gears/canon90d.jpg",
            title: "Canon 90D",
            description: "My main camera, that replace my old Canon 2000D"
        },
        {
            img: "img/gears/1855mm.jpg",
            title: "EF-S 18-55mm f/3.5-5.6 IS II",
            description: "Basic lense but it does the job"
        },
        {
            img: "img/gears/75300mm.jpg",
            title: "EF 75-300mm f/4-5.6 III USM",
            description: "My lense for detailed photo"
        },
        {
            img: "img/gears/cartesd.webp",
            title: "Sandisk Ultra SD 128 Go",
            description: "The only SD card type and brand I trust"
        },
        {
            img: "img/gears/trepied.jpg",
            title: "ESSENTIELB TP1400ASC",
            description: "My trepiod for long exposure shot"
        },
    ];

    const studioTech = [
        {
            img: "img/gears/pc.jpg",
            title: "Acer Aspire Vero 15,6",
            description: "My PC for all work, not only photography"
        },
        {
            img: "img/gears/toshiba.jpg",
            title: "Toshiba SSD",
            description: "Good storage device"
        },
        {
            img: "img/gears/m55.webp",
            title: "Corsair M55",
            description: "A very good value for money mouse"
        },
        {
            img: "img/gears/k60.jpg",
            title: "Corsair K60 red",
            description: "Simple keyboard with satisfying sound"
        },
        {
            img: "img/gears/casquejbl.webp",
            title: "JBL Tune 720BT",
            description: "Confortable headphone to escape in music world"
        },
    ];

    const software = [
        {
            img: "img/gears/lightroom.jpg",
            title: "Lightroom",
            description: "Used for my photos editing only"
        },
        {
            img: "img/gears/notion.jpg",
            title: "Notion",
            description: "I store my entire life here"
        },
        {
            img: "img/gears/calendar.jpg",
            title: "Notion Calendar",
            description: "Everything is in the title"
        },
        {
            img: "img/gears/googlephoto.jpg",
            title: "Google Photo",
            description: "Keep a save on my photos"
        },
        {
            img: "img/gears/gmail.jpg",
            title: "Gmail",
            description: "My email app for personal use"
        },
        {
            img: "img/gears/outlook.jpg",
            title: "Outlook",
            description: "And my email app for work"
        },
    ];

    const itemWidth = "22vw";
    const isSmallScreen = useMediaQuery('(max-width:700px)');

    return (
        <Base>
            <Box sx={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-evenly"
            }}>
                <Typography sx={{
                    margin: "1em 0 1em 3em",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: "500",
                    fontSize: "1.7em",
                }}>
                    Camera gear
                </Typography>
                <Box sx={{
                    width: "100vw",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>

                    {photoItems.map((item) => (
                        <Box sx={{
                            margin: "20px 60px",
                            width: isSmallScreen ? "70vw" : itemWidth,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            <img
                                style={{ width: "80%", height: isSmallScreen ? "50vw" : "17vw", objectFit: "cover" }}
                                src={item.img}
                                srcSet={item.img}
                                loading="lazy"
                                alt={item.title}
                            />
                            <Typography sx={{
                                marginTop: "20px",
                                fontFamily: "Bebas Neue",
                                fontSize: "1.5em",
                            }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{
                                marginTop: "10px",
                                fontSize: "1em",
                                fontFamily: "Roboto, sans-serif",
                                fontWeight: "300",
                            }}>
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Typography sx={{
                    margin: "1em 0 1em 3em",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: "500",
                    fontSize: "1.7em",
                }}>
                    Studio Tech
                </Typography>
                <Box sx={{
                    width: "100vw",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    {studioTech.map((item) => (
                        <Box sx={{
                            margin: "20px 60px",
                            width: isSmallScreen ? "70vw" : itemWidth,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            <img
                                style={{ width: "80%", height: isSmallScreen ? "50vw" : "17vw", objectFit: "cover" }}
                                src={item.img}
                                srcSet={item.img}
                                loading="lazy"
                                alt={item.title}
                            />
                            <Typography sx={{
                                marginTop: "20px",
                                fontFamily: "Bebas Neue",
                                fontSize: "1.5em",
                            }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{
                                marginTop: "10px",
                                fontSize: "1em",
                                fontFamily: "Roboto, sans-serif",
                                fontWeight: "300",
                            }}>
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Typography sx={{
                    margin: "1em 0 1em 3em",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: "500",
                    fontSize: "1.7em",
                }}>
                    Software
                </Typography>
                <Box sx={{
                    width: "100vw",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    {software.map((item) => (
                        <Box sx={{
                            margin: "20px 60px",
                            width: isSmallScreen ? "70vw" : itemWidth,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            <img
                                style={{ width: "55%", height: isSmallScreen ? "37vw" : "12vw", objectFit: "cover" }}
                                src={item.img}
                                srcSet={item.img}
                                loading="lazy"
                                alt={item.title}
                            />
                            <Typography sx={{
                                marginTop: "20px",
                                fontFamily: "Bebas Neue",
                                fontSize: "1.5em",
                            }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{
                                marginTop: "10px",
                                fontSize: "1em",
                                fontFamily: "Roboto, sans-serif",
                                fontWeight: "300",
                            }}>
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Base >
    )
}

export default Gears;