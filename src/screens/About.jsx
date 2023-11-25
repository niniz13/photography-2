import React from 'react';
import { Typography, Box, useMediaQuery } from "@mui/material";
import { animated, useSpring } from '@react-spring/web';
import Base from "../components/Base"

const About = () => {
    const isSmallScreen = useMediaQuery('(max-width:1050px)');

    const upSlideAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(50vh)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    const downSlideAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-50vh)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    return (
        <Base>
            <Box sx={{
                width: "100vw",
                height: isSmallScreen ? "" : "76vh",
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <animated.div style={{
                    ...upSlideAnimation,
                    maxWidth: isSmallScreen ? "100vw" : "30vw",
                    position: "relative",
                    top: "10%",
                    margin: isSmallScreen ? "0 1em" : ""
                }}>

                    <img style={{ width: "100%" }}
                        src="img/IMG_3321.JPG"
                        alt="About picture"
                    />
                    <Typography sx={{
                        fontFamily: "Bebas Neue",
                        fontSize: "1.4em",
                        lineHeight: "1.2"
                    }}>
                        I'm a passionate photographer from Aix-en-Provence, France, specializing in automotive photography. While cars are my main focus, I also explore various
                        genres like landscapes, portraits, architecture, and street photography.
                    </Typography>
                </animated.div>
                <animated.div style={{
                    ...downSlideAnimation,
                    maxWidth: isSmallScreen ? "100vw" : "30vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: isSmallScreen ? "0 1em" : ""
                }}>
                    <Typography sx={{
                        display: isSmallScreen ? "None" : "flex",
                        position: "relative",
                        top: "7vh",
                        zIndex: "999",
                        fontSize: "7vw",
                        fontWeight: "400",
                        lineHeight: "0.9",
                        fontFamily: "Tangerine"
                    }}>
                        Jérémy Gross
                    </Typography>
                    <Box>
                        <img style={{ width: "100%", }}
                            src="img/IMG_1689.JPG"
                            alt="About picture" />
                    </Box>

                </animated.div>
                <animated.div style={{
                    ...upSlideAnimation,
                    maxWidth: isSmallScreen ? "100vw" : "30vw",
                    position: "relative",
                    top: "10%",
                    margin: isSmallScreen ? "0 1em" : ""
                }}>
                    <Typography sx={{
                        fontFamily: "Bebas Neue",
                        fontSize: "1.4em",
                        lineHeight: "1.2"
                    }}>
                        Through my lens, I capture the beauty of France, aiming to share my unique perspective and create timeless memories.
                        Join me on this visual journey through the link below!
                    </Typography>
                    <img style={{ width: "100%" }}
                        src="img/IMG_7877.JPG"
                        alt="About picture"
                    />
                </animated.div>
            </Box>
        </Base >
    )

}

export default About;