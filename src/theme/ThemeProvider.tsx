import React, { PropsWithChildren } from 'react';

import { ConfigProvider } from 'antd';

import { colors } from './colors';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
