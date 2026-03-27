const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ski-wekan-mongodb</title>
  <style>
    body { font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f0f2f5; }
    .card { background: white; padding: 2rem 3rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; }
    h1 { color: #333; } p { color: #666; }
  </style>
</head>
<body>
  <div class="card">
    <h1>ski-wekan-mongodb</h1>
    <p>Server is running. Ready for development.</p>
  </div>
</body>
</html>`);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
