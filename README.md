# Hotel Reservation System

Welcome to the Voco Hotel frontend application! This project is a modern, fast, and responsive React application built with **React Router v7** and styled with **Tailwind CSS v4**.


## Tech Stack
- **Framework**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

## Project Structure
- `app/routes.ts`: Centralized routing configuration.
- `app/routes/`: Contains all the page-level route components (`home`, `about`, `rooms`, `reservation`, `events`, `contact`).
- `app/components/`: Reusable UI components (`Navbar`, `Footer`, `Slider`, `Testimonials`).
- `app/app.css`: Global stylesheet containing the Tailwind `@theme` configuration, color tokens, and Google Fonts (`Playfair Display`, `Lato`).
- `public/images/`: Static image assets.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server, run:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production
To create an optimized production build:
```bash
npm run build
```

## Deployment

This application is deployed as a Docker container using a GitHub Actions CI/CD pipeline. It uses **Traefik** as a reverse proxy to automatically handle routing and generate HTTPS certificates via Let's Encrypt.

You can deploy the application on a server using two different methods:

### Option 1: Docker Run (Used in our CI/CD Pipeline)
This is the fastest method for single-command deployments, especially over SSH pipelines:
```bash
docker run -d \
  --name react-frontend \
  --network web \
  -l traefik.enable=true \
  -l traefik.http.routers.react.rule="Host(\`hotel-booking.molika.app\`)" \
  -l traefik.http.routers.react.entrypoints=websecure \
  -l traefik.http.routers.react.tls.certresolver=le \
  -l traefik.http.services.react.loadbalancer.server.port=3000 \
  alexkgm/hotel-booking:latest
```

### Option 2: Docker Compose (Better for local server management)
If you prefer managing deployments with configuration files on your server, create a `docker-compose.yml` file and run `docker compose up -d`:
```yaml
version: "3.8"

services:
  react-frontend:
    image: "alexkgm/hotel-booking:latest"
    container_name: "react-frontend"
    networks:
      - web
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.react.rule=Host(`hotel-booking.molika.app`)"
      - "traefik.http.routers.react.entrypoints=websecure"
      - "traefik.http.routers.react.tls.certresolver=le"
      - "traefik.http.services.react.loadbalancer.server.port=3000"

networks:
  web:
    external: true
```
