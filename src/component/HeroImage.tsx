import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface HeroImageProps {
  sx?: object;
}

const HeroImage: React.FC<HeroImageProps> = ({ sx }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 64px)',
        backgroundImage: 'url(/sv650.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          fontFamily: 'serif',
          marginTop: '-33.33%', // 上から3分の1の位置に配置
        }}
      >
        Bike is Life
      </Typography>
    </Box>
  );
};

export default HeroImage;