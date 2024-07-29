// components/Footer.tsx
import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} className="text-center md:text-left">
            <Typography variant="h6" className="mb-4">About Us</Typography>
            <Typography variant="body2">
              We are passionate about biking, camping, and IT. Follow our blog for the latest updates and tips.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className="text-center">
            <Typography variant="h6" className="mb-4">Quick Links</Typography>
            <Box className="flex flex-col">
              <Link href="#" color="inherit" className="hover:text-gray-400 mb-2">Home</Link>
              <Link href="#" color="inherit" className="hover:text-gray-400 mb-2">About</Link>
              <Link href="#" color="inherit" className="hover:text-gray-400 mb-2">Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="text-center md:text-right">
            <Typography variant="h6" className="mb-4">Follow Us</Typography>
            <Box className="flex justify-center md:justify-end space-x-4">
              <Link href="#" color="inherit" className="hover:text-gray-400"><Facebook /></Link>
              <Link href="#" color="inherit" className="hover:text-gray-400"><Twitter /></Link>
              <Link href="#" color="inherit" className="hover:text-gray-400"><Instagram /></Link>
            </Box>
          </Grid>
        </Grid>
        <Box className="text-center mt-8">
          <Typography variant="body2">
            © 2023 B.log. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;