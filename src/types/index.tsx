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
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
}
