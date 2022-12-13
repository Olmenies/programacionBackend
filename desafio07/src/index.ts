// Imports
import Server from './services/server';

// Constants
const PORT = process.env.PORT || 8080;

// Server listener
Server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
