import { useState } from 'react';
import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useSpring, animated } from 'react-spring'
import FooterIcon from "./FooterIcon"
import { useEffect } from 'react';

const Base = ({ children }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuAnimation = useSpring({
        transform: isMenuOpen ? 'translateY(0%)' : 'translateY(-100%)',
        opacity: 1,
        config: { tension: 320, friction: 20 }
    });

    const toggleMenu = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
        } else {
            setIsMenuOpen(false);
        }
    };

    return (
        <Box sx={{
            width: "100vw"
        }}>
            {isMenuOpen && (
                <animated.div
                    style={{
                        ...menuAnimation,
                        top: 0,
                        left: 0,
                        position: 'fixed',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: "#000",
                        zIndex: 999,
                        cursor: "default"
                    }}
                >
                    <Typography
                        onClick={toggleMenu}
                        sx={{
                            margin: "20px",
                            position: "fixed",
                            top: "0",
                            right: "0",
                            fontSize: '2em',
                            color: "#fff",
                            cursor: "pointer"
                        }}
                    >
                        &#10005;
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "5em",
                            color: "#fff",
                            fontFamily: "Bebas Neue",
                            cursor: "pointer"
                        }}
                        onClick={() => navigate('/accueil')}
                    >
                        Home
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "5em",
                            color: "#fff",
                            fontFamily: "Bebas Neue",
                            cursor: "pointer"
                        }}
                        onClick={() => navigate('/about')}
                    >
                        About
                    </Typography>
                </animated.div>
            )}
            <Box sx={{
                margin: "0 3em",
                height: "12vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography sx={{
                    fontSize: "2em",
                    fontFamily: "Bebas Neue"
                }}>
                    Jérémy Gross
                </Typography>
                <Typography
                    sx={{
                        cursor: "pointer",
                        fontSize: "1.5em",
                        fontFamily: "Bebas Neue",
                    }}
                    onClick={toggleMenu}
                >
                    Menu
                </Typography>
            </Box>
            <Box>
                {children}
            </Box>
            <Box sx={{
                height: "12vh",
                margin: "0 3em",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography sx={{
                    fontSize: "1.2em",
                    fontFamily: "Bebas Neue"
                }}>
                    &copy; Copyright, Jérémy Gross 2023
                </Typography>
                <Box>
                    <FooterIcon
                        href={"https://www.instagram.com/grs__jeremy"}
                        alt={"Instagram Icon"}
                        src={"img/instagram.png"}
                    />
                    <FooterIcon
                        href={"https://twitter.com/jeremgross13"}
                        alt={"Twitter Icon"}
                        src={"img/twitter.png"}
                    />
                    <FooterIcon
                        href={"https://www.linkedin.com/in/j%C3%A9r%C3%A9my-gross-159a8622b/"}
                        alt={"Linkedin Icon"}
                        src={"img/linkedin.png"}
                    />
                    <FooterIcon
                        href={"https://github.com/JeremyGross13"}
                        alt={"Github Icon"}
                        src={"img/github.png"}
                    />
                </Box>

            </Box>
        </Box>
    )
}

export default Base