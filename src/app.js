import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/mocks', mocksRouter);

mongoose.connect('mongodb://localhost:27017/mockDB')
  .then(() => {
    console.log('🟢 Conectado a MongoDB');
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
  })
  .catch(err => console.error('🔴 Error conectando a MongoDB:', err));

  //GET http://localhost:3000/api/mocks/mockingpets

  //GET http://localhost:3000/api/mocks/mockingusers

  //POST http://localhost:3000/api/mocks/generateData
