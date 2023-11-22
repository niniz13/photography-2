import { Typography, Box } from "@mui/material";
import Base from "../components/Base"

const About = () => {

    return (
        <Base>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "25%",
                    height: "76vh",
                    alignItems: "center",
                    justifyContent: "flex-end"
                }}>

                    <img style={{
                        width: "350px"
                    }}
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
                    display: "flex",
                    flexDirection: "column",
                    width: "25%",
                    height: "76vh",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Typography sx={{
                        zIndex: "5",
                        top: "15%",
                        fontSize: "7vw",
                        fontWeight: "400",
                        lineHeight: "0.9",
                        fontFamily: "Tangerine"
                    }}>
                        Jérémy Gross
                    </Typography>
                    <Box sx={{
                        width: "540px",
                        height: "300px"
                    }}>
                        <img style={{
                            width: "100%"
                        }}
                            src="img/IMG_1689.JPG"
                            alt="About picture" />
                    </Box>

                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "25%",
                    height: "76vh",
                    alignItems: "center",
                    justifyContent: "flex-end"
                }}>
                    <Typography sx={{
                        fontFamily: "Bebas Neue",
                        fontSize: "1.5em",
                        lineHeight: "1.2"
                    }}>
                        Lorem ipsum dolor sit amet consectetur. Magna diam egestas mauris massa ullamcorper at. Proin tincidunt mattis proin massa at mi ullamcorper.
                    </Typography>
                    <img style={{
                        width: "350px"
                    }}
                        src="img/IMG_7877.JPG"
                        alt="About picture"
                    />
                </Box>
            </Box>
        </Base>
    )

}

export default About;