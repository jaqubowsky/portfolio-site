import { transporter } from "@/config/nodemailer";
import generateEmailContent from "@/lib/generateEmailContent";
import type { NextApiRequest, NextApiResponse } from "next";

const myEmail = "jakub.nalewajk04@gmail.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, subject } = req.body;
  const data = req.body;

  await transporter.sendMail({
    from: email,
    to: myEmail,
    subject,
    ...generateEmailContent(data),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
