import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // 환경 변수에서 이메일 자격증명 가져오기
    const { EMAIL_USER, EMAIL_PASS, GMAIL_PASS_KEY } = process.env;

    // SMTP 서버 설정
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Gmail SMTP 서버 사용
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: GMAIL_PASS_KEY,
      },
    });

    // 메일 옵션 설정
    const mailOptions = {
      from: `"Lia Hwang 👻" <${EMAIL_USER}>`, // 발신자 주소
      to: req.body.to, // 수신자 주소
      subject: req.body.subject, // 제목
      text: req.body.text, // 일반 텍스트 본문
      html: req.body.html, // HTML 본문
    };

    // 메일 전송
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
