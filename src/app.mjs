import express from 'express';
import cors from 'cors';
import corsConfig from './config/corsConfig.mjs';
import projectsRoutes from './routes/projectsRoutes.mjs';

const app = express();

app.use(cors(corsConfig));
app.use(express.json());

app.use(projectsRoutes);

export default app;