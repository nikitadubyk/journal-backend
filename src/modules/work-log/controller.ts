import { Request, Response } from 'express';

import { WorkLogService } from './service';

export const WorkLogController = {
  async getAll({ query }: Request, res: Response) {
    const date = query.date as string | undefined;
    const data = await WorkLogService.getAll(date);
    res.json(data);
  },

  async getById({ params }: Request, res: Response) {
    const data = await WorkLogService.getById(Number(params.id));
    res.json(data);
  },

  async create({ body }: Request, res: Response) {
    const data = await WorkLogService.create(body);
    res.status(201).json(data);
  },

  async update({ body, params }: Request, res: Response) {
    const data = await WorkLogService.update(Number(params.id), body);
    res.json(data);
  },

  async delete({ params }: Request, res: Response) {
    await WorkLogService.delete(Number(params.id));
    res.status(204).send();
  },
};
