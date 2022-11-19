// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { contactUsSchema } from '../../constant/schemas/contact_us_schema'
import nodemailer from 'nodemailer';
import { limiter } from '../../constant';

type Data = {
  response: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {


  try {
    await limiter.check(res, 3, 'CACHE_TOKEN') // 10 requests per minute
    const values = req?.body || {};
    await contactUsSchema.validate(values);

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'elmezziouy.mstph@gmail.com',
        // pass: process.env.password,
        pass: 'bitektjigkjutqle',
      },
      secure: true,
    })

    const mailData = {
      from: values?.email || "myemail123@xyz.abc",
      to: "elmezziouy.mstph@gmail.com",
      subject: `Message From ${values.firstName}`,
      text: values.message + " | Sent from: " + values.email,
      html: `<div>${values.message}</div><p>Sent from:
      ${values.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log("There is an error!!!");
        console.log({ err })
      } else {
        console.log({ info })
      }
    })

  } catch (error) {
    res.status(429).json({ response: 'Rate limit exceeded' })
  }

  res.status(200).json({ response: 'John Doe' });
}
