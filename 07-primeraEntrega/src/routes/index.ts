// Imports
import { Router } from "express";
import path from "path";
import cartRoute from './cartRoute';
import prodsRoute from './prodsRoute';

// Constants

// Route definition
const mainRoute = Router();

// Outer routes
mainRoute.use('/products', prodsRoute);
mainRoute.use('/cart', cartRoute);

// Endpoints
mainRoute.get('/', (req, res) => {
  res.json({msg:'You made a GET to /api'})
})

// Exports
export default mainRoute;