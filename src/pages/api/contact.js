import Nodemailer from 'nodemailer'
export default function (req, res) {
    const transporter = Nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'portconform@gmail.com',
      pass: 'portfolio1278',
    },
    secure: true,});
    const mailData = {
      from: 'portconform@gmail.com',
      to: 'ma.zeghmouri@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
     }
     transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200).json({})
   
   }