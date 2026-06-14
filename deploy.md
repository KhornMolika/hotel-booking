# Deployment Architecture & Workflow

This document outlines the deployment flow for the Hotel Booking application, where each component runs, and how Traefik is configured for automatic HTTPS.

## 🌍 Where Does Everything Run?

- **GitHub Actions**: Runs on temporary, isolated servers provided by GitHub. It handles the "build" process (compiling code and creating Docker images).
- **Docker Hub**: A cloud registry that securely stores your compiled Docker images.
- **GCP Server**: Your actual Google Cloud VM (`34.143.174.167`). Both **Traefik** and your **React App** run side-by-side on this server.

---

## 🚀 The GitHub Actions Workflow Explained

When you push code to the `main` branch, the `.github/workflows/deploy-project.yaml` file tells GitHub Actions to execute the following steps:

1. **Checkout Code**: Uses your `SSH_PRIVATE_KEY` to securely download your latest code from GitHub onto the Actions runner.
2. **Login to Docker Hub**: Uses your `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` to authenticate.
3. **Build Image**: Reads your `Dockerfile`, installs dependencies, builds the React app, and packages it into a Docker image.
4. **Push Image**: Uploads the finished image to Docker Hub so your GCP server can download it later.
5. **Deploy Server (via SSH)**: 
   - Connects to your GCP Server using `SSH_HOST`, `SSH_USER` (`devops`), and `SSH_PRIVATE_KEY`.
   - Tells your server to pull the new image from Docker Hub.
   - Deletes the old container and spins up the new one with specific labels so Traefik knows how to route traffic to it.

---

## 🛠 Server Pre-requisites

Before the CI/CD pipeline can run successfully, the GCP server must be configured with the following:

### 1. Docker Group Permissions
The deployment user (`devops`) must be able to execute Docker commands. In our pipeline, we run commands with `sudo`, so `devops` needs passwordless sudo access. 

### 2. Docker Network
Both Traefik and the application must share the same Docker network to communicate. You must create this network on the server once:
```bash
docker network create web
```

---

## 🚦 Traefik Setup (Reverse Proxy & HTTPS)

Traefik acts as the "front door" for your GCP server. It listens on ports 80 and 443, intercepts all incoming web traffic, and routes it to the correct Docker container based on the domain name. It also automatically generates SSL certificates via Let's Encrypt.

You only need to start Traefik **once** on your GCP server. You can use either a Docker Run command or a Docker Compose file.

### Option A: Using Docker Run
Run this directly on your server:

```bash
docker run -d \
  --name traefik \
  --network web \
  --restart unless-stopped \
  -p 80:80 \
  -p 443:443 \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  -v traefik-certs:/letsencrypt \
  traefik:v2.11 \
  --providers.docker=true \
  --providers.docker.exposedbydefault=false \
  --entrypoints.web.address=:80 \
  --entrypoints.web.http.redirections.entryPoint.to=websecure \
  --entrypoints.web.http.redirections.entryPoint.scheme=https \
  --entrypoints.websecure.address=:443 \
  --certificatesresolvers.le.acme.tlschallenge=true \
  --certificatesresolvers.le.acme.email=molikakhorn71@gmail.com \
  --certificatesresolvers.le.acme.storage=/letsencrypt/acme.json \
  --api.dashboard=true
```

### Option B: Using Docker Compose (Recommended for manageability)
Create a `docker-compose.yml` file on your server and run `docker compose up -d`:

```yaml
version: "3.8"

services:
  traefik:
    image: "traefik:v2.11"
    container_name: "traefik"
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    networks:
      - web
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "traefik-certs:/letsencrypt"
    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entryPoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.le.acme.tlschallenge=true"
      - "--certificatesresolvers.le.acme.email=molikakhorn71@gmail.com"
      - "--certificatesresolvers.le.acme.storage=/letsencrypt/acme.json"
      - "--api.dashboard=true"

volumes:
  traefik-certs:

networks:
  web:
    external: true
```

---

## 📦 Application Deployment Configuration

When deploying the React application via GitHub Actions, we use Docker labels to dynamically tell Traefik how to route traffic. Because Traefik listens to the Docker daemon (`/var/run/docker.sock`), it detects these labels instantly.

```bash
sudo docker run -d \
  --name react-frontend \
  --network web \
  -l traefik.enable=true \
  -l traefik.http.routers.react.rule="Host(\`hotel-booking.molika.app\`)" \
  -l traefik.http.routers.react.entrypoints=websecure \
  -l traefik.http.routers.react.tls.certresolver=le \
  -l traefik.http.services.react.loadbalancer.server.port=3000 \
  $IMAGE_NAME:latest
```

### Label Breakdown:
- `traefik.enable=true`: Tells Traefik to expose this container to external traffic.
- `rule="Host(...)"`: Specifies the domain name (`hotel-booking.molika.app`) that should route to this container.
- `entrypoints=websecure`: Forces traffic to go through port 443 (HTTPS).
- `tls.certresolver=le`: Tells Traefik to automatically generate and attach an SSL certificate using the Let's Encrypt resolver.
- `loadbalancer.server.port=3000`: Explicitly tells Traefik which internal port the container's application is listening on (essential if `EXPOSE` is missing from the Dockerfile).
