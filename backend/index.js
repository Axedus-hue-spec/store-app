import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

import productRouter from './routes/productRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/products', productRouter)

app.listen(4000, () => {
    console.log('server is running')
})