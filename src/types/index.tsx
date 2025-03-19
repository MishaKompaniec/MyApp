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
  name: string;
  price: number;
}
