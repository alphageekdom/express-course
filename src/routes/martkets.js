import express from 'express';

const router = express.Router();

const supermarkets = [
  {
    id: 1,
    store: 'Whole Foods',
    miles: 32,
  },
  {
    id: 2,
    store: 'Sprouts',
    miles: 12,
  },
  {
    id: 3,
    store: 'Amazon Fresh',
    miles: 22,
  },
  {
    id: 4,
    store: "Trader Joe's",
    miles: 5,
  },
  {
    id: 3,
    store: 'Amazon Fresh',
    miles: 2.2,
  },
  {
    id: 4,
    store: "Trader Joe's",
    miles: 1.5,
  },
];

// QUERY PARAMS
router.get('/', (req, res) => {
  const { miles } = req.query;
  const parsedMiles = parseInt(miles);
  if (!isNaN(parsedMiles)) {
    const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
    res.send(filteredStores);
  } else res.send(miles);
});

export default router;
