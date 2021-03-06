const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
// if there's a heroku env.variable for PORT, use that...otherwise use 3000
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

// if what the user requested isn't in the /public folder, serve up index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});