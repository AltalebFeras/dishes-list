export interface Dish {
  id: string;
  name: string;
  slug: string;
  description: string;
  thumbnailUrl: string;
  images: string[];
  ingredients: string[];
  price: {
    amount: number;
    currency: string;
  };
  category: string;
}
