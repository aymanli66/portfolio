
import { Photo, PhotoCategory } from './types';

export const PHOTOS: Photo[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    title: 'The Gaze',
    category: PhotoCategory.PORTRAIT,
    description: 'A study in light and shadow captured in mid-afternoon.'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    title: 'Silk Flow',
    category: PhotoCategory.FASHION,
    description: 'High-fashion editorial for Vogue Italia.'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    title: 'Monolith',
    category: PhotoCategory.ARCHITECTURAL,
    description: 'Minimalist structural observation of modern glass.'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1529139513065-07b3b1bf38b1?auto=format&fit=crop&w=1200&q=80',
    title: 'Azure Muse',
    category: PhotoCategory.EDITORIAL,
    description: 'Creative direction exploring blue hues.'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
    title: 'Iron & Grace',
    category: PhotoCategory.PORTRAIT,
    description: 'Masculinity redefined through soft lighting.'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&w=1200&q=80',
    title: 'Parisian Night',
    category: PhotoCategory.FASHION,
    description: 'Street fashion capture under moonlight.'
  }
];

export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '/about' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' }
];
