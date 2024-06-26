import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Portfolio } from '@/common/types';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { exchange, period, exits },
  } = req;
  // const summary = await prisma.$queryRaw<Portfolio[]>(
  //   `EXEC [dbo].[usp_Position] 
  //     @period = ${period},
  //     @exchange = '${exchange}',
  //     @exits = '${exits}'`,
  // );
  // prisma.$disconnect();
  // res.status(200).json(summary);
};
