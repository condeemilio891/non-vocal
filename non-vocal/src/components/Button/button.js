import * as React from 'react';
import { ImageButton,ImageSrc,Image,ImageBackdrop,ImageMarked } from './styled';
import Box from '@mui/material/Box';
import help from '../../sounds/Help.mp3'
import Typography from '@mui/material/Typography';
import useSound from 'use-sound'


const images = [
  {
    url: process.env.PUBLIC_URL+'./images/help.jpg',
    title: 'Help',
    width: '30%',
    sound: process.env.PUBLIC_URL+'./sounds/Help.mp3', 
  },
  {
    url: process.env.PUBLIC_URL+'./images/toilet2.png',
    title: 'Burgers',
    width: '27%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: 'Camera',
    width: '30%',
  },
];

export default function ButtonBases() {

  let audio = new Audio(help)

  const start = () => {
    audio.play()
  }

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image  onClick={start} style={{ backgroundImage: `url(${image.url})` }}>
              <Typography
                component="span"
                variant="subtitle1"
                color="black"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    );
  }