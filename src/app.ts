import cors from 'cors';
import express from 'express';

import workLogRoutes from './modules/work-log/routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/work-logs', workLogRoutes);

export default app;
