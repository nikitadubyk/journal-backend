import { prisma } from '../../prisma';

import { CreateWorkLog } from './types';

export const WorkLogService = {
  async getAll(date?: string) {
    return prisma.workLog.findMany({
      orderBy: { date: 'desc' },
      include: { workType: true },
      where: date
        ? {
            date: new Date(date),
          }
        : undefined,
    });
  },

  async getById(id: number) {
    return prisma.workLog.findUnique({
      where: { id },
      include: { workType: true },
    });
  },

  async create(data: CreateWorkLog) {
    return prisma.workLog.create({
      data: {
        ...data,
        date: new Date(data.date),
      },
    });
  },

  async update(id: number, data: Partial<CreateWorkLog>) {
    return prisma.workLog.update({
      where: { id },
      data: {
        ...data,
        ...(data.date && {
          date: new Date(data.date),
        }),
      },
    });
  },

  async delete(id: number) {
    return prisma.workLog.delete({
      where: { id },
    });
  },
};
