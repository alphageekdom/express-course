import express from 'express';
import groceriesRoutes from './routes/groceries.js';
import marketRoutes from './routes/martkets.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 9000;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

// ROUTER
app.use('/api/v1/groceries', groceriesRoutes);
app.use('/api/v1/markets', marketRoutes);

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
