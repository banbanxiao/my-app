import Header from '@/component/Header';
import React from 'react';
import Container from '@mui/material/Container';
import { Hero } from '@/component/Hero';
import { LayoutGrids } from '@/component/LayoutGrids';
import Footer from '@/component/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Container sx={{ p: 4 }}>
        <LayoutGrids />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;