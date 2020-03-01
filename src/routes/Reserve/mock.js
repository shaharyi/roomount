
export const MOCK_ROOMS = {
  2: '5',
  4: '5',
};
export const MOCK_INFO = {
  id: '1',
  name: 'MOCK_1',
  address: 'Some Hotel 1 address park1 av',
  image: 'https://pix10.agoda.net/hotelImages/96605/-1/dd32d9b188d86d6d8dc40d1ff9a0ebf6.jpg?s=1024x768',
  stars: 1,
  tripAdvisorScore: 9.2,
  kmFromCenter: 0.7,
  lowestPrice: 470,
  reviewCount: 3,
  location: [
    50.8179,
    4.6997,
  ],
  orderInfo: {
    nights: 3,
    adults: 2,
    children: 2,
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ullamcorper lacus. Suspendisse vulputate lectus sollicitudin elit egestas, nec tempus justo maximus. Aenean eget facilisis sapien. Pellentesque sit amet eros tincidunt, consequat turpis et, pharetra ante. Aliquam lacus nunc, maximus vel tempor eget, placerat at felis. Nulla vulputate, nunc at fringilla fermentum, ante nisi tincidunt ante, at placerat magna nibh quis tortor. Ut mattis diam eget ante efficitur vestibulum.',
  gallery: [
    'http://react-responsive-carousel.js.org/assets/1.jpeg',
    'http://react-responsive-carousel.js.org/assets/2.jpeg',
    'http://react-responsive-carousel.js.org/assets/3.jpeg',
    'http://react-responsive-carousel.js.org/assets/4.jpeg',
    'http://react-responsive-carousel.js.org/assets/5.jpeg',
  ],
  roomTypes: [
    {
      type: 'Double room',
      rooms: [
        {
          id: '1',
          maxAdults: 2,
          pricePerNight: 150,
          breakfastPrice: 0,
          cancellationType: 'free',
        },
        {
          id: '2',
          maxAdults: 2,
          pricePerNight: 150,
          breakfastPrice: 30,
          cancellationType: 'partial',
        },
        {
          id: '3',
          maxAdults: 2,
          pricePerNight: 150,
          breakfastPrice: 30,
          cancellationType: 'none',
        },
      ],
    },
    {
      type: 'Triple room',
      rooms: [
        {
          id: '4',
          maxAdults: 2,
          pricePerNight: 150,
          breakfastPrice: 0,
          cancellationType: 'free',
        },
      ],
    },
  ],
  rulesAndPoliciesInfo: {
    checkIn: 'Some check in info',
    checkOut: 'Some Check out info ',
    childrenAndExtraBeds: 'Some Children and extra beds info',
    pets: 'Some Pets info',
    acceptedCards: [
      'amex',
      'default',
      'diners',
      'discover',
      'elo',
      'hipercard',
      'jcb',
      'maestro',
      'mastercard',
      'paypal',
      'securityCode',
      'unionpay',
      'verve',
      'visa',
    ],
  },
};
