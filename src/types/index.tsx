export interface IROUTE_MODEL<T> {
  path: string;
  element: T;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface AdvantageItemProps {
  title: string;
  text: string;
}

export interface DrawerItemProps {
  product: CartItem;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
}

export interface Advantage {
  title: string;
  text: string;
}
