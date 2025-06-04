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
  const { cart, addToCart, toggleCart } = useCart();

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
        {bestSellers.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);

          return (
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
                  <Button
                    type={isInCart ? 'default' : 'primary'}
                    onClick={() => {
                      if (isInCart) {
                        toggleCart();
                      } else {
                        addToCart(product);
                      }
                    }}
                  >
                    {isInCart ? 'Посмотреть корзину' : 'Добавить в корзину'}
                  </Button>
                </CardInfo>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default BestSellers;
