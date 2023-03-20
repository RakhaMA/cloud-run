const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send('123190109\nRakha Mohammad A');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on port ${PORT}...');
});
