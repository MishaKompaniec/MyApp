import React from 'react';

import ProductCard from '@/components/productCard';

import { Wrapper, Image } from './style';

import { bouquets } from '@/utils/pages';

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
