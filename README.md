# Voco Hotel Reservation System

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
