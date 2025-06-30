import { RouteProps } from 'react-router-dom';

import Home from '@/pages/home';
import Store from '@/pages/store';
import { IROUTE_MODEL } from '@/types';
import { Pages } from '@/utils/pages';

export const ROUTES: IROUTE_MODEL<RouteProps['children']>[] = [
  { path: Pages.HOME, element: <Home /> },
  { path: Pages.PAGE1, element: <Store /> },
];
