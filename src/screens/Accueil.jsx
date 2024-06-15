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
  TextField,
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
  return (
    <Base>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '25px',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              color: '#F5F5F5',
              fontFamily: 'Domine, serif',
              fontSize: '108px',
              lineHeight: '110%',
              letterSpacing: '-1%',
            }}
          >
            Capture the World
          </Typography>
          <Typography
            sx={{
              color: '#F5F5F5',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '22px',
            }}
          >
            Embrace the Darkness.
          </Typography>
          <CustomButton label={'Explore Now'} links={'/'} />
        </Box>
      </Box>

      <Box
        sx={{
          width: '100vw',
          minHeight: '100vh',
          paddingBottom: '100px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ImageList
          sx={{
            padding: '10px',
          }}
          variant='masonry'
          cols={3}
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
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '1024px',
          }}
        >
          <Typography
            sx={{
              color: '#A855F7',
              fontFamily: 'Domine, serif',
              fontSize: '36px',
            }}
          >
            About Me
          </Typography>
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
          <Box>
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
            {event.map((item) => (
              <Accordion
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
          </Box>
        </Box>
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
            fontSize: '108px',
            letterSpacing: '-1%',
            lineHeight: '110%',
            marginBottom: '20px',
          }}
        >
          Sport, Luxuary
        </Typography>
        <Typography
          sx={{
            color: '#F5F5F5',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '22px',
            lineHeight: '140%',
            marginBottom: '50px',
          }}
        >
          Dive into the world of car photography with me.
        </Typography>
        <ImageList
          sx={{
            padding: '50px',
          }}
          variant='masonry'
          cols={4}
          gap={8}
        >
          {imagesCaroussel.map((item) => (
            <ImageListItem>
              <img
                style={{
                  borderRadius: '32px',
                }}
                src={item}
                alt=''
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
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
            fontSize: '72px',
            letterSpacing: '-1%',
            lineHeight: '108%',
            marginBottom: '20px',
          }}
        >
          Contact me
        </Typography>
        <Typography
          sx={{
            color: '#F5F5F5',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '22px',
            lineHeight: '140%',
            marginBottom: '50px',
          }}
        >
          Let's create together
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <CustomTextField placeholder={'Your name'} height={'56px'} />
          <CustomTextField placeholder={'Your email'} height={'56px'} />
          <CustomTextField placeholder={'Your message'} height={'174px'} />
          <CustomButton label={'Submit'} />
        </Box>
      </Box>
    </Base>
  );
};

export default Accueil;
