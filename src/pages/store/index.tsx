import { Tabs } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Bouquets from './bouquets';
import EdibleBouquets from './edibleBouquets';
import Plants from './plants';
import { Wrapper } from './style';

const Store = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Tabs
        defaultActiveKey="bouquets"
        tabPosition="left"
        items={[
          {
            label: t('store.bouquets'),
            key: 'bouquets',
            children: <Bouquets />,
          },
          {
            label: t('store.plants'),
            key: 'plants',
            children: <Plants />,
          },
          {
            label: t('store.fruitBouquets'),
            key: 'fruit',
            children: <EdibleBouquets />,
          },
        ]}
      />
    </Wrapper>
  );
};

export default Store;
