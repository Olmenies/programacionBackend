// Imports
import express from 'express';
import path from 'path';
import { createServer } from 'http';
import mainRoute from '../routes';

// App defnition
const app = express();

// Two magic lines
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main route
app.use('/api', mainRoute)

// Endpoints endpoints
app.use('/', (req, res) => {
  res.json({msg:'You made a GET to /'});
});

// Exports
export default app;