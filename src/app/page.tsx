
import Grid from '@/component/Grids';
import Header from '@/component/Header';
import HeroImage from '@/component/HeroImage';
import React from 'react';
import Container from '@mui/material/Container';
import GridContainer from '@/component/Grids';

const bikeTouringItems = [
  { title: '富士山ツアー', description: '富士山の美しい景色を楽しむスリリングなバイクツアーです。', imageUrl: '/path/to/image1.jpg' },
  { title: '北海道冒険', description: '北海道の壮大な風景をバイクで探索します。', imageUrl: '/path/to/image2.jpg' },
  { title: '京都歴史ライド', description: '京都の豊かな歴史と文化を発見するバイクツアーです。', imageUrl: '/path/to/image3.jpg' },
  { title: '沖縄沿岸ライド', description: '沖縄の美しい沿岸の風景を楽しむリラックスしたバイクライドです。', imageUrl: '/path/to/image4.jpg' },
  { title: '長野山岳チャレンジ', description: '長野の挑戦的な山岳バイクツアーで自分の限界に挑戦します。', imageUrl: '/path/to/image5.jpg' },
  { title: '東京都市探検', description: '東京の賑やかな街並みをバイクでナビゲートするエキサイティングなツアーです。', imageUrl: '/path/to/image6.jpg' }
];

const productItems = [
  { title: '自作CMS', description: 'ReactとNode.jsを使用して構築されたカスタムコンテンツ管理システム。', imageUrl: '/path/to/cms.jpg' },
  { title: 'チャットボット', description: '自然言語処理を使用した高度なチャットボットソリューション。', imageUrl: '/path/to/chatbot.jpg' },
  { title: 'データビジュアライゼーションツール', description: 'D3.jsを使用したインタラクティブなデータビジュアライゼーションツール。', imageUrl: '/path/to/datavis.jpg' },
  { title: 'モバイルアプリ', description: 'React Nativeを使用して開発されたクロスプラットフォームモバイルアプリ。', imageUrl: '/path/to/mobileapp.jpg' },
  { title: '機械学習モデル', description: 'TensorFlowを使用して構築されたカスタム機械学習モデル。', imageUrl: '/path/to/mlmodel.jpg' },
  { title: 'APIゲートウェイ', description: '複数のサービスを統合するためのAPIゲートウェイソリューション。', imageUrl: '/path/to/apigateway.jpg' }
];


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroImage sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      <Container sx={{ p: 4 }}>
        <GridContainer items={bikeTouringItems} heading="バイクツーリング" />
        <GridContainer items={productItems} heading="IT関連" />
      </Container>
    </div>
  );
};

export default HomePage;