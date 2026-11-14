export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  emoji: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Қызыл алма',
    category: 'Жемістер',
    price: 650,
    unit: '1 кг',
    emoji: '🍎',
    description: 'Жаңа піскен, шырынды қызыл алма.',
  },
  {
    id: 2,
    name: 'Банан',
    category: 'Жемістер',
    price: 850,
    unit: '1 кг',
    emoji: '🍌',
    description: 'Тәтті әрі балғын банан.',
  },
  {
    id: 3,
    name: 'Құлпынай',
    category: 'Жемістер',
    price: 1800,
    unit: '500 г',
    emoji: '🍓',
    description: 'Хош иісті жаңа құлпынай.',
  },
  {
    id: 4,
    name: 'Сүт',
    category: 'Сүт өнімдері',
    price: 550,
    unit: '1 л',
    emoji: '🥛',
    description: 'Күнделікті тұтынуға арналған сүт.',
  },
  {
    id: 5,
    name: 'Ірімшік',
    category: 'Сүт өнімдері',
    price: 1200,
    unit: '300 г',
    emoji: '🧀',
    description: 'Дәмді әрі сапалы ірімшік.',
  },
  {
    id: 6,
    name: 'Нан',
    category: 'Нан өнімдері',
    price: 180,
    unit: '1 дана',
    emoji: '🍞',
    description: 'Жаңа піскен жұмсақ нан.',
  },
  {
    id: 7,
    name: 'Қызанақ',
    category: 'Көкөністер',
    price: 700,
    unit: '1 кг',
    emoji: '🍅',
    description: 'Балғын қызанақ.',
  },
  {
    id: 8,
    name: 'Сәбіз',
    category: 'Көкөністер',
    price: 350,
    unit: '1 кг',
    emoji: '🥕',
    description: 'Жаңа жиналған сәбіз.',
  },
  {
    id: 9,
    name: 'Брокколи',
    category: 'Көкөністер',
    price: 950,
    unit: '1 дана',
    emoji: '🥦',
    description: 'Пайдалы әрі балғын брокколи.',
  },
  {
    id: 10,
    name: 'Жұмыртқа',
    category: 'Басқалар',
    price: 750,
    unit: '10 дана',
    emoji: '🥚',
    description: 'Балғын тауық жұмыртқасы.',
  },
  {
    id: 11,
    name: 'Апельсин',
    category: 'Жемістер',
    price: 900,
    unit: '1 кг',
    emoji: '🍊',
    description: 'Шырынды апельсин.',
  },
  {
    id: 12,
    name: 'Қияр',
    category: 'Көкөністер',
    price: 500,
    unit: '1 кг',
    emoji: '🥒',
    description: 'Балғын қияр.',
  },
];

export const categories = [
  'Барлығы',
  'Жемістер',
  'Көкөністер',
  'Сүт өнімдері',
  'Нан өнімдері',
  'Басқалар',
];