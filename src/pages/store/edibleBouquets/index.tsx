import React from 'react';

import ProductCard from '@/components/productCard';

import { Wrapper, Image } from './style';

import { fruitBouquets } from '@/utils/pages';

const EdibleBouquets = () => (
  <Wrapper>
    {fruitBouquets.map((fruitBouquet) => (
      <ProductCard
        key={fruitBouquet.id}
        product={fruitBouquet}
        cover={<Image alt={fruitBouquet.title} src={fruitBouquet.image} />}
      />
    ))}
  </Wrapper>
);

export default EdibleBouquets;
