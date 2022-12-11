// Imports
import { Router } from "express";
import routeChat from './routeChat';
import routeSelectChat from './routeSelectChat';

// Main route definition
const mainRoute = Router();

// Other routes definitions
mainRoute.use('/chat', routeChat);
mainRoute.use('/selectChat', routeSelectChat);

// Debug endpoints
mainRoute.get('/', (req, res) => {
  res.json({msg:'You made a GET to /api'});
});

// Exports
export default mainRoute;
