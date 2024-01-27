const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${req.query.lat}&lng=${req.query.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = response.data;

    res.json({
      filteredRestaurants: json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      allRestaurants: json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    });
  } catch (error) {
    console.error("Error fetching restaurants data:", error.response?.status, error.response?.data);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
