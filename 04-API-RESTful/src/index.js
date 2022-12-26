// Server import
 const server = require('./services/server');

 // Port definition
 const PORT  = process.env.PORT || 8080;

 // Port listener
 server.listen(PORT, (req,res) => {
    console.log(`Port listening to ${PORT}`);
 });

 // Error logic
 server.on('error', error => console.error(`Error on sever: ${error} `));