import { Card, Button } from 'antd';

import { useCart } from '@/CartContext';
import { CartItem } from '@/types';

import { Description, CardWrapper, CardInfo, CardTitle, Price } from './style';

const ProductCard = ({
  product,
  cover,
}: {
  product: CartItem;
  cover?: React.ReactNode;
}) => {
  const { cart, addToCart, toggleCart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <CardWrapper>
      <Card hoverable style={{ width: 200 }} cover={cover}>
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
    </CardWrapper>
  );
};

export default ProductCard;
