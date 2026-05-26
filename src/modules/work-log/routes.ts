import { Router } from 'express';

import { validate } from '../../middlewares/validate';

import { WorkLogController } from './controller';
import { createWorkLogSchema, updateWorkLogSchema } from './schema';

const router = Router();

router.get('/', WorkLogController.getAll);

router.get('/:id', WorkLogController.getById);

router.post('/', validate(createWorkLogSchema), WorkLogController.create);

router.patch('/:id', validate(updateWorkLogSchema), WorkLogController.update);

router.delete('/:id', WorkLogController.delete);

export default router;
