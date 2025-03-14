import express from 'express';
import {getAllProjects} from "../controllers/projectsController.mjs";

const router = express.Router();

router.get('/api/projects/getAll', getAllProjects);

export default router;