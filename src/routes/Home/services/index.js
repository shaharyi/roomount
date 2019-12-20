export const HOTELS_MOCK = [
  {
    id: 1,
    name: 'Some Hotel 1',
    address: 'Some Hotel 1 address park1 av',
    image: 'https://pix10.agoda.net/hotelImages/96605/-1/dd32d9b188d86d6d8dc40d1ff9a0ebf6.jpg?s=1024x768',
    stars: 1,
    tripAdvisorScore: 9.2,
    kmFromCenter: 0.7,
    lowestPrice: 470,
    reviewCount: 3,
  },
  {
    id: 2,
    name: 'Some Hotel 2',
    address: 'Some Hotel 2 address park1 av',
    stars: 2,
    kmFromCenter: 0.82,
    lowestPrice: 470,
    tripAdvisorScore: 8.2,
    reviewCount: 3,
  },
  {
    id: 3,
    name: 'Some Hotel 3',
    address: 'Some Hotel 3 address park1 av',
    stars: 3,
    kmFromCenter: 0.82,
    lowestPrice: 470,
    tripAdvisorScore: 7.2,
    reviewCount: 3,
  },
  {
    id: 4,
    name: 'Some Hotel 4',
    address: 'Some Hotel 4 address park1 av',
    stars: 4,
    kmFromCenter: 0.82,
    lowestPrice: 470,
    tripAdvisorScore: 6.2,
    reviewCount: 3,
  },
  {
    id: 5,
    name: 'Some Hotel 5',
    address: 'Some Hotel 5 address park1 av',
    stars: 5,
    kmFromCenter: 0.82,
    lowestPrice: 470,
    tripAdvisorScore: 5.2,
    reviewCount: 3,
  },
];

export const searchHotels = (options) => new Promise((resolve) => {
  console.log('SerachingHotels', options);
  setInterval(() => resolve(HOTELS_MOCK), 2000);
});
