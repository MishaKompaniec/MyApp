import { Card, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { useCart } from '@/CartContext';
import { CartItem } from '@/types';

import { Description, CardInfo, CardTitle, Price } from './style';

const ProductCard = ({
  product,
  cover,
}: {
  product: CartItem;
  cover?: React.ReactNode;
}) => {
  const { cart, addToCart, toggleCart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);
  const { t } = useTranslation();

  return (
    <Card hoverable cover={cover}>
      <CardInfo>
        <CardTitle>{t(`${product.category}.${product.id}.title`)}</CardTitle>
        <Description>
          {t(`${product.category}.${product.id}.description`)}
        </Description>
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
  );
};

export default ProductCard;
