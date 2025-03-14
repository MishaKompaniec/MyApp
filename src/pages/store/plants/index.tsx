import React from 'react';

import ProductCard from '@/components/productCard';
import { plants } from '@/utils/pages';

import { Wrapper, Image } from './style';

const Plants = () => (
  <Wrapper>
    {plants.map((plant) => (
      <ProductCard
        key={plant.id}
        product={plant}
        cover={<Image alt={plant.title} src={plant.image} />}
      />
    ))}
  </Wrapper>
);

export default Plants;
