const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;
let cors = require('cors');

app.use(cors());

app.use(express.static('static'));

let hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

// Endpoint 1: Get hotels sorted by pricing (low-to-high or high-to-low)
app.get('/hotels/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  let sortedHotels = [...hotels];

  if (pricing === 'low-to-high') {
    sortedHotels.sort((a, b) => b.price - a.price);
  } else if (pricing === 'low-to-high') {
    sortedHotels.sort((a, b) => a.price - b.price);
  }

  res.json({ hotels: sortedHotels });
});

// Endpoint 2: Get hotels sorted by ratings (high-to-low or low-to-high)
app.get('/hotels/sort/rating', (req, res) => {
  let rating = req.query.rating;
  let sortedHotels = [...hotels];

  if (rating === 'high-to-low') {
    sortedHotels.sort((a, b) => b.rating - a.rating);
  } else if (rating === 'low-to-high') {
    sortedHotels.sort((a, b) => a.rating - b.rating);
  }

  res.json({ hotels: sortedHotels });
});

// Endpoint 3: Get hotels sorted by reviews (most-to-least or least-to-most)
app.get('/hotels/sort/reviews', (req, res) => {
  let reviews = req.query.reviews;
  let sortedHotels = [...hotels];

  if (reviews === 'most-to-least') {
    sortedHotels.sort((a, b) => b.reviews - a.reviews);
  } else if (reviews === 'least-to-most') {
    sortedHotels.sort((a, b) => a.reviews - b.reviews);
  }

  res.json({ hotels: sortedHotels });
});

// Filter hotels by selected amenity
function filterByAmenity(amenity) {
  return hotels.filter(
    (hotel) => hotel.amenity.toLowerCase() === amenity.toLowerCase()
  );
}

// Endpoint 4: Filter hotels by amenity
app.get('/hotels/filter/amenity', (req, res) => {
  let amenity = req.query.amenity.toLowerCase();

  let filteredHotels = filterByAmenity(amenity);

  res.json({ hotels: filteredHotels });
});

function filterByCountry(country) {
  return hotels.filter(
    (hotel) => hotel.country.toLowerCase() === country.toLowerCase()
  );
}

//Endpoint 5: Filter the hotels based on the selected Country
app.get('/hotels/filter/country', (req, res) => {
  let country = req.query.country.toLowerCase();

  let filteredHotels = filterByCountry(country);

  res.json({ hotels: filteredHotels });
});

function filterByCategory(category) {
  return hotels.filter(
    (hotel) => hotel.category.toLowerCase() === category.toLowerCase()
  );
}

//Endpoint 6: Filter the hotels based on the selected Category
app.get('/hotels/filter/category', (req, res) => {
  let category = req.query.category.toLowerCase();

  let filteredHotels = filterByCategory(category);

  res.json({ hotels: filteredHotels });
});

// Endpoint 7: Get all hotels
app.get('/hotels', (req, res) => {
  res.json({ hotels: hotels });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});