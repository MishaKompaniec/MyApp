import React from 'react';

import ProductCard from '@/components/productCard';

import { Wrapper, Image } from './style';

const bouquets = [
  {
    id: 1,
    title: 'Роза',
    description: 'Красная роза',
    price: '500₽',
    image: '/images/image1.jpg',
  },
  {
    id: 2,
    title: 'Лилия',
    description: 'Белая лилия',
    price: '700₽',
    image: '/images/image2.jpg',
  },
  {
    id: 3,
    title: 'Тюльпаны',
    description: 'Микс тюльпанов',
    price: '900₽',
    image: '/images/image3.jpg',
  },
];

const Bouquets = () => (
  <Wrapper>
    {bouquets.map((bouquet) => (
      <ProductCard
        key={bouquet.id}
        product={bouquet}
        cover={<Image alt={bouquet.title} src={bouquet.image} />}
      />
    ))}
  </Wrapper>
);

export default Bouquets;
