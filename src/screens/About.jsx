import { Typography, Box, useMediaQuery } from "@mui/material";
import Base from "../components/Base"

const About = () => {
    const isSmallScreen = useMediaQuery('(max-width:1050px)');

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
                <Box sx={{
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
                        fontSize: "1.5em",
                        lineHeight: "1.2"
                    }}>
                        Lorem ipsum dolor sit amet consectetur. Magna diam egestas mauris massa ullamcorper at. Proin tincidunt mattis proin massa at mi ullamcorper.
                    </Typography>
                </Box>
                <Box sx={{
                    maxWidth: isSmallScreen ? "100vw" : "30vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: isSmallScreen ? "0 1em" : ""
                }}>
                    <Typography sx={{
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

                </Box>
                <Box sx={{
                    maxWidth: isSmallScreen ? "100vw" : "30vw",
                    position: "relative",
                    top: "10%",
                    margin: isSmallScreen ? "0 1em" : ""
                }}>
                    <Typography sx={{
                        fontFamily: "Bebas Neue",
                        fontSize: "1.5em",
                        lineHeight: "1.2"
                    }}>
                        Lorem ipsum dolor sit amet consectetur. Magna diam egestas mauris massa ullamcorper at. Proin tincidunt mattis proin massa at mi ullamcorper.
                    </Typography>
                    <img style={{ width: "100%" }}
                        src="img/IMG_7877.JPG"
                        alt="About picture"
                    />
                </Box>
            </Box>
        </Base>
    )

}

export default About;