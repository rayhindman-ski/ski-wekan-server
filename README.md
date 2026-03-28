# ski-wekan-mongodb

  Docker Compose setup for running [Wekan](https://wekan.github.io/) (open-source Kanban board) with MongoDB locally.

  ## Services

  | Service   | Image                      | Port  | Description        |
  |-----------|----------------------------|-------|--------------------|
  | wekan-db  | mongo:6                    | —     | MongoDB database   |
  | wekan-app | ghcr.io/wekan/wekan:latest | 8080  | Wekan web app      |

  ## Quick Start

  ```bash
  # Clone the repo
  git clone <repo-url>
  cd ski-wekan-mongodb

  # Start both services
  docker compose up -d

  # Verify both containers are running
  docker compose ps

  # Open Wekan in your browser
  open http://localhost:8080
  ```

  ## Useful Commands

  ```bash
  # View logs for all services
  docker compose logs -f

  # View logs for a specific service
  docker compose logs -f wekan
  docker compose logs -f wekandb

  # Stop all services (data is preserved)
  docker compose down

  # Stop and remove all data (clean slate)
  docker compose down -v

  # Pull latest images and restart
  docker compose pull && docker compose up -d
  ```

  ## Configuration

  Copy `.env.example` to `.env` and adjust values as needed before starting.

  ```bash
  cp .env.example .env
  ```
  