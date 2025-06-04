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
  const { addToCart } = useCart();

  return (
    <CardWrapper>
      <Card hoverable style={{ width: 200 }} cover={cover}>
        <CardInfo>
          <CardTitle>{product.title}</CardTitle>
          <Description>{product.description}</Description>
          <Price>{product.price}</Price>
          <Button type="primary" onClick={() => addToCart(product)}>
            Добавить в корзину
          </Button>
        </CardInfo>
      </Card>
    </CardWrapper>
  );
};

export default ProductCard;
