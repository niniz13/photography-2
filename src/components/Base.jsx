import { Box } from "@mui/material"
import * as React from 'react'
import { useNavigate } from "react-router-dom";
import MenuButton from "./MenuButton";
import FooterIcon from "./FooterIcon";

const Base = ({ children }) => {
    const navigate = useNavigate();

    return (
        <Box >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '76px 0 50px',
            }}>
                <h1 onClick={() => navigate('/accueil')}>
                    Jérémy Gross
                </h1>
                <Box sx={{
                    marginTop: '45px',
                    textAlign: 'center',
                }}>
                    <MenuButton onClick={() => navigate('/accueil')}>
                        Home
                    </MenuButton>
                    <MenuButton onClick={() => navigate('/about')}>
                        About
                    </MenuButton>
                </Box>
            </Box>
            <Box >
                {children}
            </Box>
            <Box sx={{
                textAlign: 'center',
                borderTop: '1px solid rgba(0, 0, 0, .13)',
                paddingTop: '41px',
                paddingBottom: '41px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
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
        </Box >
    );
};

export default Base;