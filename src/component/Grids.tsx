import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CustomCard from './Card';

interface GridProps {
  items: { title: string; description: string; imageUrl: string }[];
  heading: string;
}

const GridContainer: React.FC<GridProps> = ({ items, heading }) => {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
        {heading}
      </Typography>
      <Grid container spacing={3} justifyContent="center"> {/* spacingを調整 */}
        {items.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={index}> {/* カードの幅を広げる */}
            <CustomCard title={item.title} description={item.description} imageUrl={item.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridContainer;