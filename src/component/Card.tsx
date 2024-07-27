import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CustomCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ width: '100%', m: 2, display: 'flex', flexDirection: 'row', height: 200 }}> {/* カードの幅を100%に設定 */}
      <Box
        component="img"
        sx={{
          width: "height", // 画像の横幅を固定
          height: '100%', // 画像の縦幅を固定
          objectFit: 'cover',
        }}
        src={imageUrl}
        alt={title}
      />
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3, // 行数を制限
          }}
        >
          <Typography variant="body2" color="text.secondary">
            ロレム・イプサムは、ダミーテキストとして知られる印刷および組版業界で広く使用されている文章です。ロレム・イプサムは、文書のレイアウトやビジュアルデザインを視覚化するために利用されます。これは仮のテキストであり、実際の内容を表しているわけではありません。
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;