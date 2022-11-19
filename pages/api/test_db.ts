// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// type Data = {
//   name: string
// }

export default async function test_db(req: NextApiRequest, res: NextApiResponse) {
    // const data = req.body;
    try {
        const result = await prisma.contact.findMany();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured." });
    }
}