# ski-wekan-mongodb

Docker configuration for spinning up a MongoDB 6 database for use with a Wekan kanban server.

## Files
- `Dockerfile` — Builds a MongoDB 6 image, creates the `wekan` user and database
- `init-mongo.js` — Initialisation script run on first container start
- `docker-compose.yml` — Orchestrates the container with a persistent named volume

## Usage (outside Replit, on a Docker host)
```bash
docker-compose up -d
```

Connection string for Wekan:
```
mongodb://wekan:wekan@localhost:27017/wekan
```

## Replit workflow
The "Start application" workflow runs a small Node.js page on port 5000 that displays usage instructions.
