const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        message:'Hello root!',
        route:'Im /',
    });
});

const server = app.listen(PORT, () => {
    console.log(`Server listening to port ${server.address().port}`);
})

server.on('error', error => console.error(`Error on server: ${error}`));
