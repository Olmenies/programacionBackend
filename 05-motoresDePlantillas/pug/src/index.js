// Imports
const server = require('./services/server');

// Constants
const PORT = process.env.PORT || 8080;

// Server listener
server.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});

// Error logic
server.on('error', error => console.log(`Error on server: ${error}`));