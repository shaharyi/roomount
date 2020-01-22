
// Breakfast Included
// Free Cancellation
// Free WiFi

const common = {
  label: 'Common',
  options: [
    { value: 'breakfast_included', label: 'Breakfast Included' },
    { value: 'free_cancellation', label: 'Free Cancellation' },
    { value: 'free_wifi', label: 'Free WiFi' },
  ],
};

// Room price per night
// 0-50 $, 50 -100, 100-150, 150-200, 200+
const price = {
  label: 'Price',
  options: [
    { value: 'price_0', label: '0-50$' },
    { value: 'price_1', label: '50 -100$' },
    { value: 'price_2', label: '100-150$' },
    { value: 'price_3', label: '150-200$' },
    { value: 'price_4', label: '200$+' },
  ],
};

// Star Rating
// Unrated
// 1 star
// 2 stars
// 3 stars
// 4 stars
// 5 stars
const stars = {
  label: 'Stars Rating',
  options: [
    { value: 'stars_0', label: '1 star' },
    { value: 'stars_1', label: '2 stars' },
    { value: 'stars_2', label: '3 stars' },
    { value: 'stars_3', label: '4 stars' },
    { value: 'stars_4', label: '5 stars' },
  ],
};
// Distance from Center
// Less than 1 km
// Less than 3 km
// more than 3 km
const distance = {
  label: 'Distance from Center',
  options: [
    { value: 'distance_0', label: 'Less than 1 km' },
    { value: 'distance_1', label: 'Less than 3 km' },
    { value: 'distance_2', label: 'more than 3 km' },
  ],
};
// Review score
// At least 3
// At least 3.5
// At least 4
// At least 4.5
const score = {
  label: 'Review score',
  options: [
    { value: 'score_0', label: 'At least 3' },
    { value: 'score_1', label: 'At least 3.5' },
    { value: 'score_2', label: 'At least 4' },
    { value: 'score_3', label: 'At least 4.5' },
  ],
};

// Property Facilities

const facilities = {
  isHalf: true,
  label: 'Property Facilities',
  options: 'Restaurant,pets allowed,Fitness room, Sauna, Hotels only, Parking, Free parking, spa, welness center,pool, indoor pool, 24/7 frontdesk, beach access, full board meals, half board neals,Non-smoking rooms, free parking, family rooms, airport shuttle, lounge, Disabled guests facilities, room service, laundry service, business centre, Elevator, free WiFi in all areas, paid WiFi, Bar, Concierge Service,Allergy free room'
    .split(',')
    .map((str) => str.trim())
    .map((a) => { console.log(a); return a; })
    .map((str) => ({ label: str, value: str.toLowerCase() })),
};
const amenities = {
  isHalf: true,
  label: 'Room Facilities / Amenities',
  options: 'Bath,Private bathroom,kitchen/kitchenette, air conditioning, view, soundproofing, electric kettle,Coffee/tea maker, safety deposit box, heating'
    .split(',')
    .map((str) => str.trim())
    .map((str) => ({ label: str, value: str.toLowerCase() })),
};
// Room Facilities / Amenities
// Bath
// Private bathroom
// kitchen/kitchenette, air conditioning, view, soundproofing, electric kettle
// Coffee/tea maker, safety deposit box, heating

export const allFiltersObject = {
  common,
  price,
  stars,
  distance,
  score,
  facilities,
  amenities,
};
// get all options
export const filtersState = Object.values(allFiltersObject)
  .reduce((acc, current) => acc.concat(current.options), [])
  .reduce((acc, { value }) => {
    acc[value] = false;
    return acc;
  }, {});
