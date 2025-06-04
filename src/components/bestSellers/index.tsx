import { Card, Button } from 'antd';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useCart } from '@/CartContext';
import { bestSellers } from '@/utils/pages';

import {
  Description,
  Wrapper,
  CardInfo,
  CardTitle,
  Image,
  Title,
  Price,
} from './style';

const BestSellers = () => {
  const { addToCart } = useCart();
  return (
    <Wrapper id="bestSellers">
      <Title>Популярные товары</Title>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        style={{ paddingBottom: '35px' }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {bestSellers.map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<Image alt={product.title} src={product.image} />}
            >
              <CardInfo>
                <CardTitle>{product.title}</CardTitle>
                <Description>{product.description}</Description>
                <Price>{product.price}</Price>
                <Button type="primary" onClick={() => addToCart(product)}>
                  Добавить в корзину
                </Button>
              </CardInfo>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};
export default BestSellers;
