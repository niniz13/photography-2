import { Box, ImageListItem } from "@mui/material";
import Base from "../../components/Base"
import * as React from 'react'

const About = () => {

    return (
        <Base>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0 30px 100px',
                maxWidth: '550px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
            }}>
                <ImageListItem sx={{
                    maxWidth: '100%',
                    width: '42%',
                    marginBottom: '25px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                }}>
                    <img style={{ borderRadius: '50%' }} src={"img/profile.JPG"} alt={"Image accueil"} />
                </ImageListItem>
                <React.Fragment>
                    <h2 style={{
                        color: '#303030',
                        marginTop: '0',
                        marginBottom: ' 10px',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '26px',
                        fontWeight: '700',
                        lineHeight: '33px',
                    }}>
                        And love breaks
                    </h2>
                    <p style={{
                        color: '#303030',
                        marginTop: '0',
                        fontSize: '14px',
                        lineHeight: '24px',
                        marginBottom: '10px',
                        fontFamily: 'Arial, sans-serif',
                    }}>
                        Welcome to my photography world! I am a passionate photographer based in the beautiful city of
                        Aix-en-Provence, France.
                        While I find immense joy in capturing various subjects, my true passion lies in the art of automotive
                        photography.
                        There is something magical about combining my love for cars and photography, as I strive to capture the
                        sleek lines,
                        vibrant colors, and raw energy of these magnificent machines. However, I am not limited to just one
                        genre.
                    </p>
                    <p style={{
                        color: '#303030',
                        marginTop: '0',
                        fontSize: '14px',
                        lineHeight: '24px',
                        marginBottom: '10px',
                        fontFamily: 'Arial, sans-serif',
                    }}>
                        I enjoy exploring diverse subjects and capturing the essence of each moment. From landscapes to
                        portraits, architecture
                        to street photography, I find inspiration in the multitude of places that France has to offer.
                        Through my lens, I aim to immortalize the beauty that surrounds us and share my unique perspective with
                        the world.
                        Join me on this visual journey and let's create timeless memories together. You can find me with the link below this site !
                    </p>
                </React.Fragment>
            </Box>
        </Base>
    )
}

export default About;