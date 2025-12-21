
export interface Photo {
  id: string;
  url: string;
  title: string;
  category: PhotoCategory;
  description: string;
}

export enum PhotoCategory {
  PORTRAIT = 'Portrait',
  FASHION = 'Fashion',
  ARCHITECTURAL = 'Architectural',
  EDITORIAL = 'Editorial'
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
