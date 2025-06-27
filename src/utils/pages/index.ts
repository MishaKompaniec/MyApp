import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import { Advantage } from '@/types';

export enum Pages {
  HOME = '/',
  PAGE1 = '/store',
}

export const useAdvantagesData = (): Advantage[] => {
  const { t } = useTranslation();

  return [
    {
      title: t('advantages.cards.florists.title'),
      text: t('advantages.cards.florists.text'),
    },
    {
      title: t('advantages.cards.fresh.title'),
      text: t('advantages.cards.fresh.text'),
    },
    {
      title: t('advantages.cards.prices.title'),
      text: t('advantages.cards.prices.text'),
    },
  ];
};

export const bestSellers = [
  {
    id: 'bouquet1',
    title: 'bestSellersBlock.bouquet1.title',
    description: 'bestSellersBlock.bouquet1.description',
    price: 2150,
    image: '/images/image2.jpg',
    quantity: 1,
  },
  {
    id: 'basket1',
    title: 'bestSellersBlock.basket1.title',
    description: 'bestSellersBlock.basket1.description',
    price: 3200,
    image: '/images/image3.jpg',
    quantity: 1,
  },
  {
    id: 'aroma1',
    title: 'bestSellersBlock.aroma1.title',
    description: 'bestSellersBlock.aroma1.description',
    price: 1650,
    image: '/images/image4.jpg',
    quantity: 1,
  },
  {
    id: 'roses1',
    title: 'bestSellersBlock.roses1.title',
    description: 'bestSellersBlock.roses1.description',
    price: 680,
    image: '/images/image5.jpg',
    quantity: 1,
  },
  {
    id: 'bouquet2',
    title: 'bestSellersBlock.bouquet2.title',
    description: 'bestSellersBlock.bouquet2.description',
    price: 1450,
    image: '/images/image2.jpg',
    quantity: 1,
  },
  {
    id: 'basket2',
    title: 'bestSellersBlock.basket2.title',
    description: 'bestSellersBlock.basket2.description',
    price: 1200,
    image: '/images/image3.jpg',
    quantity: 1,
  },
  {
    id: 'aroma2',
    title: 'bestSellersBlock.aroma2.title',
    description: 'bestSellersBlock.aroma2.description',
    price: 900,
    image: '/images/image4.jpg',
    quantity: 1,
  },
  {
    id: 'roses2',
    title: 'bestSellersBlock.roses2.title',
    description: 'bestSellersBlock.roses2.description',
    price: 1200,
    image: '/images/image5.jpg',
    quantity: 1,
  },
];

export const bouquets = [
  {
    id: uuidv4(),
    title: 'Красная роза',
    description: 'Красная роза с длинными стеблями',
    price: 740,
    image: '/images/image1.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Белая лилия',
    description: 'Лилия с белыми лепестками и желтым центром',
    price: 1200,
    image: '/images/image2.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Разноцветные тюльпаны',
    description: 'Тюльпаны разных цветов в букете',
    price: 430,
    image: '/images/image3.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Ярко-розовая роза',
    description: 'Роза с ярко-розовыми лепестками',
    price: 640,
    image: '/images/image4.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Нежные белые лилии',
    description: 'Нежные белые лилии с зелеными листьями',
    price: 740,
    image: '/images/image5.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Весенние тюльпаны',
    description: 'Букет весенних тюльпанов с яркими цветами',
    price: 430,
    image: '/images/image2.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Мини-розы',
    description: 'Красная роза с маленькими бутонами',
    price: 500,
    image: '/images/image4.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Экзотическая лилия',
    description: 'Лилия с экзотическим ароматом и розовыми лепестками',
    price: 800,
    image: '/images/image2.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Фиолетовые тюльпаны',
    description: 'Тюльпаны с сочетанием белых и фиолетовых оттенков',
    price: 540,
    image: '/images/image3.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Насыщенная роза',
    description: 'Роза с насыщенным красным цветом и сильным ароматом',
    price: 660,
    image: '/images/image5.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Розовая лилия',
    description: 'Лилия с белыми лепестками и розовыми кончиками',
    price: 750,
    image: '/images/image2.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Оранжевые тюльпаны',
    description: 'Букет тюльпанов с желтыми и оранжевыми цветами',
    price: 850,
    image: '/images/image1.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Кустовая роза',
    description: 'Кустовая роза с множеством маленьких бутонов',
    price: 520,
    image: '/images/image1.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Кремовая лилия',
    description: 'Лилия с большими кремовыми лепестками',
    price: 650,
    image: '/images/image2.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Праздничные тюльпаны',
    description: 'Красочные тюльпаны в букете для особого случая',
    price: 540,
    image: '/images/image4.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Полевые ромашки',
    description: 'Свежие только собраные с поля ромашки',
    price: 380,
    image: '/images/image1.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Георгины',
    description: 'Самые свежие так как собраны на ферме под Киевом',
    price: 400,
    image: '/images/image1.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Фиолетовые тюльпаны',
    description: 'Тюльпаны с сочетанием белых и фиолетовых оттенков',
    price: 540,
    image: '/images/image3.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Насыщенная роза',
    description: 'Роза с насыщенным красным цветом и сильным ароматом',
    price: 600,
    image: '/images/image5.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Розовая лилия',
    description: 'Лилия с белыми лепестками и розовыми кончиками',
    price: 1290,
    image: '/images/image2.jpg',
    quantity: 1,
  },
];

export const plants = [
  {
    id: uuidv4(),
    title: 'Фикус',
    description:
      'Зеленое домашнее растение с блестящими листьями, добавляющее уюта',
    price: 900,
    image: '/images/plant1.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Алое',
    description:
      'Растение с мясистыми листьями, которое помогает в уходе за кожей',
    price: 345,
    image: '/images/plant2.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Каланхоэ',
    description:
      'Цветущее комнатное растение с яркими цветами и целебными свойствами',
    price: 450,
    image: '/images/plant3.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Спатифиллум',
    description:
      'Цветущее растение, известное как «женское счастье», с белыми цветами',
    price: 350,
    image: '/images/plant4.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Папоротник',
    description:
      'Зеленое декоративное растение, которое подходит для увлажненных помещений',
    price: 1200,
    image: '/images/plant5.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Кротон',
    description:
      'Растение с яркими листьями, которые могут быть красными, желтыми или оранжевыми',
    price: 450,
    image: '/images/plant3.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Сансевиерия',
    description:
      'Невероятно выносливое растение с жесткими листьями, идеально подходит для начинающих',
    price: 600,
    image: '/images/plant2.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Фаленопсис',
    description:
      'Экзотическая орхидея с красивыми цветами, идеально подходит для украшения интерьера',
    price: 700,
    image: '/images/plant5.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Замиокулькас',
    description:
      'Растение с глянцевыми листьями, которое подходит для помещений с низким освещением',
    price: 515,
    image: '/images/plant1.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Драцена',
    description:
      'Элегантное комнатное растение с длинными листьями, которое красиво смотрится в интерьере',
    price: 465,
    image: '/images/plant3.jpg',
    quantity: 1,
  },
];

export const fruitBouquets = [
  {
    id: uuidv4(),
    title: 'Ягодный рай',
    description: 'Набор свежих ягод: клубника, малина, черника и ежевика.',
    price: 1000,
    image: '/images/food1.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Фантазия тропиков',
    description: 'Манго, ананас, киви и маракуйя в изысканном оформлении.',
    price: 1270,
    image: '/images/food2.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Солнечный микс',
    description: 'Апельсины, мандарины, персики и виноград в ярком букете.',
    price: 650,
    image: '/images/food3.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Вишневый восторг',
    description: 'Спелая вишня и черешня, дополненные декоративной зеленью.',
    price: 555,
    image: '/images/food4.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Экзотический рай',
    description: 'Драгонфрукт, кокос, манго и ананас в стильной композиции.',
    price: 1010,
    image: '/images/food2.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Клубничный рай',
    description: 'Свежая клубника в сочетании с нежным шоколадным декором.',
    price: 1220,
    image: '/images/food1.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Фруктовый фейерверк',
    description: 'Яркое сочетание арбуза, дыни, ананаса и киви.',
    price: 980,
    image: '/images/food4.jpg',
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: 'Гранатовая страсть',
    description: 'Гранат, красные яблоки и виноград в элегантной упаковке.',
    price: 1150,
    image: '/images/food3.jpg',
    quantity: 1,
  },
];
