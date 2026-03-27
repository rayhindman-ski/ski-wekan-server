const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ski-wekan-mongodb</title>
  <style>
    body { font-family: monospace; max-width: 700px; margin: 3rem auto; padding: 0 1.5rem; background: #1e1e1e; color: #d4d4d4; }
    h1 { color: #4ec9b0; }
    h2 { color: #9cdcfe; margin-top: 2rem; }
    pre { background: #252526; padding: 1rem; border-radius: 4px; overflow-x: auto; color: #ce9178; }
    .note { color: #6a9955; font-size: 0.9rem; }
  </style>
</head>
<body>
  <h1>ski-wekan-mongodb</h1>
  <p>Docker-based MongoDB setup for use with a Wekan kanban server.</p>

  <h2>Build &amp; Run</h2>
  <pre>docker-compose up -d</pre>

  <h2>Connection String</h2>
  <pre>mongodb://wekan:wekan@localhost:27017/wekan</pre>

  <h2>Stop &amp; Remove</h2>
  <pre>docker-compose down</pre>
  <pre>docker-compose down -v  <span class="note"># also removes the data volume</span></pre>

  <h2>Files</h2>
  <pre>Dockerfile         — MongoDB 6 image with Wekan user/db
init-mongo.js      — Creates wekan user and initial collections
docker-compose.yml — Orchestrates the container with a named volume</pre>
</body>
</html>`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Docs available at http://localhost:${PORT}`);
});
