// Imports
import Server from './services/server';
import Config from './config';

// Server listener
Server.listen(Config.port, () => {
  console.log(`Server running on port ${Config.port}`)aaaaa;
});
