import React from 'react';
import { RouteProps } from 'react-router-dom';

import Home from '@/pages/home';
import Page2 from '@/pages/page2';
import Page3 from '@/pages/page3';
import Store from '@/pages/store';
import { IROUTE_MODEL } from '@/types';
import { Pages } from '@/utils/pages';

export const ROUTES: IROUTE_MODEL<RouteProps['children']>[] = [
  { path: Pages.HOME, element: <Home /> },
  { path: Pages.PAGE1, element: <Store /> },
  { path: Pages.PAGE2, element: <Page2 /> },
  { path: Pages.PAGE3, element: <Page3 /> },
];
