import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';

const app = express();

const PORT = process.env.PORT ?? 3000;

// Middleware

app.use(express.json());
app.use(cors());
app.use(
  pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat:
          '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);

// Тестовий маршрут для імітації виникнення помилки

app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

// Кореневий маршрут

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello in my app!' });
});

// Маршрут, який буде повертати всі нотатки

app.get('/notes', (req, res) => {
  res.status(200).json({
    message: 'Retrieved all notes',
  });
});

// Маршрут, який буде повертати одну нотатку за її ідентифікатором

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
});

// Обробка неіснуючих маршрутів

app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

//Обробка помилок

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// підключення до MongoDB

await connectMongoDB();

// запуск сервера

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
