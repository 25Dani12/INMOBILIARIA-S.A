
export type PropertyCategory = 'Apartamentos' | 'Casas' | 'Airbnb' | 'Casas nuevas' | 'Casas antiguas' | 'Bodegas' | 'Apartamentos nuevos' | 'Apartamentos obra gris';

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: PropertyCategory;
}
