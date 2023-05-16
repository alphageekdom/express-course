import express from 'express';

const router = express.Router();

const groceryList = [
  {
    item: 'milk',
    quantity: 2,
  },
  {
    item: 'cereal',
    quantity: 1,
  },
  {
    item: 'pop-tarts',
    quantity: 2,
  },
];

router.get('/', (req, res) => {
  res.send(groceryList);
});

router.get('/:item', (req, res) => {
  const { item } = req.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  res.send(groceryItem);
});

router.post('/', (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.sendStatus(201);
});

export default router;
