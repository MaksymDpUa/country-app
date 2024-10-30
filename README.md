# Country Info App

This project provides a full-stack application for viewing information about countries, including population, neighboring countries, and flags. The app is built with a backend (NestJS) and frontend (Next.js).

## Prerequisites

- Node.js (v14 or higher)
- NPM (v6 or higher)

## Getting Started

Clone the repository
git clone <repository-url>
cd country-info-app



Install dependencies
Run the following command to install dependencies for both frontend and backend:
pnpm install:all

Start the application
To start both the frontend and backend servers simultaneously, run:
pnpm start
This will run the backend server on http://localhost:3001 and the frontend server on http://localhost:3000.


Available Scripts
install:all — Installs dependencies for both frontend and backend.
start:backend — Starts the backend server.
start:frontend — Starts the frontend development server.
start — Runs both frontend and backend concurrently.


Project Structure
country-info-backend/ — NestJS backend for handling country information requests.
country-info-frontend/ — Next.js frontend for displaying country information.

Additional Notes
Ensure that the backend server is running on http://localhost:3001 as it is required by the frontend to fetch data.
Customize environment variables as needed in the .env file.