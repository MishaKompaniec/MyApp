import { Tabs } from 'antd';
import React from 'react';

import Bouquets from './bouquets';
import { Wrapper } from './style';

const Store = () => (
  <Wrapper>
    <Tabs
      defaultActiveKey="bouquets"
      tabPosition="left"
      items={[
        {
          label: 'БУКЕТЫ',
          key: 'bouquets',
          children: <Bouquets />,
        },
        {
          label: 'РАСТЕНИЯ',
          key: 'plants',
          children: 'Содержимое вкладки Комнатные растения',
        },
        {
          label: 'РАЗНОЕ',
          key: 'misc',
          children: 'Содержимое вкладки Разное',
        },
      ]}
    />
  </Wrapper>
);

export default Store;
