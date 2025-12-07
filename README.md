# Node.js - Express Server

A simple Express server for working with notes, featuring basic middleware and error handling.

## Technologies

- **Node.js** + **Express.js**
- **CORS** - for handling cross-origin requests
- **Pino-http** - HTTP request logging
- **dotenv** - environment variables management

## Features

- `GET /notes` - retrieve all notes
- `GET /notes/:noteId` - retrieve a note by ID
- `GET /test-error` - test error handling
- Middleware for handling 404 and 500 errors
- Logging of all HTTP requests

## Installation

```bash
npm install
```

## Usage

```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## Author

**Olena Akatieva**
LinkedIn: linkedin.com/in/olena-akatieva
GitHub: @helen-akateva
