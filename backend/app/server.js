const express = require('express'); // Load express framework
const app = express();              // Initialize express app

const DEFAULT_PORT = 3000;

// Define behavior for the server when it receives a request with this URL
app.get('/api/greeting', function (req, res) {
  const greeting = req.query.name !== undefined ?
    `Hello ${req.query.name}!` :
    `Hello stranger!`;

  res.send({ greeting });
});

// Start server by listening to designated port and responding to all requests
const server = app.listen(process.env.PORT || DEFAULT_PORT, function () {
  // Log a message to indicate that the server was started correctly
  const port = server.address().port;
  console.log(`Server listening on port ${port}!`);
});
