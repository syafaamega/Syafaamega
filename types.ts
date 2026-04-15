
export enum Section {
  BERANDA = 'beranda',
  MENU = 'menu',
  KONTAK = 'kontak'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  color: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  date: string;
  rating: number;
}
