import { Card, Button } from 'antd';
import { useTranslation } from 'react-i18next';
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
  InnerWrapper,
} from './style';

const BestSellers = () => {
  const { cart, addToCart, toggleCart } = useCart();
  const { t } = useTranslation();

  return (
    <Wrapper id="bestSellers">
      <InnerWrapper>
        <Title>{t('bestSellers.title')}</Title>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          style={{ paddingBottom: '35px' }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {bestSellers.map((product) => {
            const isInCart = cart.some((item) => item.id === product.id);

            return (
              <SwiperSlide key={product.id}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={<Image alt={t(product.title)} src={product.image} />}
                >
                  <CardInfo>
                    <CardTitle>{t(product.title)}</CardTitle>
                    <Description>{t(product.description)}</Description>
                    <Price>
                      {product.price} {t('currency.uah')}
                    </Price>
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
                      {isInCart
                        ? t('bestSellersBlock.viewCart')
                        : t('bestSellersBlock.addToCart')}
                    </Button>
                  </CardInfo>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default BestSellers;
