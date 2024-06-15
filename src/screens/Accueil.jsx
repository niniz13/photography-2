import Base from '../components/base/Base';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomButton from '../components/CustomButton';
import CustomTextField from '../components/CustomTextField';

const event = [
  {
    summary: '2024 - Top Marque Monaco',
    detail:
      'Top Marques Monaco is a prestigious annual event held in Monaco, showcasing a spectacular' +
      "array of luxury cars, supercars, motorcycles, and high-end products. Known as the world's" +
      'most exclusive automobile show, Top Marques attracts renowned manufacturers, car enthusiasts,' +
      'and affluent buyers eager to discover the latest innovations in performance and design. In addition' +
      'to luxury vehicles, the event features exquisite jewelry, watches, and cutting-edge technology,' +
      'offering an unparalleled experience of opulence and craftsmanship. It is a must-attend event for' +
      'luxury aficionados and discerning collectors.',
  },
  { summary: "2024 - Salon de l'auto Genève" },
];

const imagesCaroussel = [
  'img/HomeCaroussel/caroussel1.webp',
  'img/HomeCaroussel/caroussel2.webp',
  'img/HomeCaroussel/caroussel3.webp',
  'img/HomeCaroussel/caroussel4.webp',
  'img/HomeCaroussel/caroussel5.webp',
  'img/HomeCaroussel/caroussel6.webp',
  'img/HomeCaroussel/caroussel7.webp',
  'img/HomeCaroussel/caroussel8.webp',
];

const Accueil = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:jeremyspam1307@gmail.com?subject=New Contact Message&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Base>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: '800px',
            textAlign: 'center',
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                color: '#F5F5F5',
                fontFamily: 'Domine, serif',
                fontSize: { xs: '48px', sm: '72px', md: '108px' },
                lineHeight: '110%',
                letterSpacing: '-1%',
              }}
            >
              Capture the World
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: '#F5F5F5',
                fontFamily: 'Open Sans, sans-serif',
                fontSize: { xs: '18px', sm: '22px' },
              }}
            >
              Embrace the Darkness.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CustomButton label={'Explore Now'} links={'/'} />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: '100vw',
          minHeight: '100vh',
          paddingBottom: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ImageList
          sx={{
            width: '100%',
            padding: '10px',
          }}
          variant='masonry'
          cols={{ xs: 1, sm: 2, md: 3 }}
          gap={8}
        >
          <ImageListItem>
            <img src='img/home.png' alt='' loading='lazy' />
          </ImageListItem>
          <ImageListItem>
            <img src='img/home2.png' alt='' loading='lazy' />
          </ImageListItem>
          <ImageListItem>
            <img src='img/home3.png' alt='' loading='lazy' />
          </ImageListItem>
        </ImageList>
      </Box>

      <Box
        sx={{
          width: '100vw',
          minHeight: '100vh',
          paddingBottom: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: '100%',
            maxWidth: '1024px',
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                color: '#A855F7',
                fontFamily: 'Domine, serif',
                fontSize: '36px',
              }}
            >
              About Me
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: '#F5F5F5',
                paddingBottom: '50px',
                fontFamily: 'Domine, serif',
                fontSize: '46px',
              }}
            >
              A passionate photographer capturing car, streets and landscapes
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: '#F5F5F5',
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '22px',
                lineHeight: '140%',
              }}
            >
              Experience
            </Typography>
            {event.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  backgroundColor: 'transparent',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#F5F5F5' }} />}
                  sx={{
                    color: '#F5F5F5',
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '16px',
                    padding: '20px',
                    borderBottom: 'solid 1px',
                    borderBottomColor: '#F5F5F5',
                  }}
                >
                  {item.summary}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '16px',
                    color: '#F5F5F5',
                    padding: '20px',
                  }}
                >
                  {item.detail}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: '100vw',
          minHeight: '100vh',
          paddingBottom: '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#F5F5F5',
            fontFamily: 'Domine, serif',
            fontSize: { xs: '48px', sm: '72px', md: '108px' },
            letterSpacing: '-1%',
            lineHeight: '110%',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Sport, Luxury
        </Typography>
        <Typography
          sx={{
            color: '#F5F5F5',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: { xs: '18px', sm: '22px' },
            lineHeight: '140%',
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          Dive into the world of car photography with me.
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            width: '100%',
            padding: '50px',
          }}
        >
          {imagesCaroussel.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <img
                style={{
                  borderRadius: '32px',
                  width: '100%',
                  height: 'auto',
                }}
                src={item}
                alt=''
                loading='lazy'
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          width: '100vw',
          minHeight: '100vh',
          paddingBottom: '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#F5F5F5',
            fontFamily: 'Domine, serif',
            fontSize: { xs: '48px', sm: '72px', md: '108px' },
            letterSpacing: '-1%',
            lineHeight: '110%',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Contact me
        </Typography>
        <Typography
          sx={{
            color: '#F5F5F5',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: { xs: '18px', sm: '22px' },
            lineHeight: '140%',
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          Let's create together
        </Typography>
        <Grid
          container
          spacing={2}
          component='form'
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12}>
            <CustomTextField
              name='name'
              placeholder='Your name'
              height='56px'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              name='email'
              placeholder='Your email'
              height='56px'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              name='message'
              placeholder='Your message'
              height='174px'
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '360px',
                height: '57px',
                backgroundColor: '#A855F7',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'ease-in 0.1s',
                color: '#F5F5F5',
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '18px',
                '&:hover': {
                  scale: '1.05',
                  backgroundColor: '#A855F7',
                },
              }}
              type='submit'
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Base>
  );
};

export default Accueil;
