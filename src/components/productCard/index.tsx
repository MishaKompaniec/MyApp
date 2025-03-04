import { Card, Button } from 'antd';

import { Description, CardInfo, CardTitle, Price } from './style';

const ProductCard = ({
  product,
  cover,
}: {
  product: any;
  cover?: React.ReactNode;
}) => (
  <Card hoverable style={{ width: 200 }} cover={cover}>
    <CardInfo>
      <CardTitle>{product.title}</CardTitle>
      <Description>{product.description}</Description>
      <Price>{product.price}</Price>
      <Button type="primary">Добавить в корзину</Button>
    </CardInfo>
  </Card>
);

export default ProductCard;
