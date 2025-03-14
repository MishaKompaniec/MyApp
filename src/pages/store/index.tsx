import { Tabs } from 'antd';
import React from 'react';

import Bouquets from './bouquets';
import Plants from './plants';
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
          children: <Plants />,
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
