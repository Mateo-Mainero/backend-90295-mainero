import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import logger from './utils/logger.js';
import swaggerUiExpress from 'swagger-ui-express';
import { swaggerSpecs } from './config/swagger.config.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import loggerMiddleware from './middleware/loggerMiddleware.js';

// Cargar variables de entorno desde .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => logger.info('Connected to MongoDB'))
    .catch(err => logger.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(cookieParser());
app.use(loggerMiddleware);

// Swagger documentation
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpecs));

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`));
