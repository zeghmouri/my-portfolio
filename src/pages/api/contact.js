   import Nodemailer from 'nodemailer'

   export default async (req, res) => {
   
   
   const transporter = Nodemailer.createTransport({
       port: 465,
       host: "smtp.gmail.com",
       auth: {
           user: 'portconform@gmail.com',
           pass: 'portfolio1278',
       },
       secure: true,});
   
   await new Promise((resolve, reject) => {
       // verify connection configuration
       transporter.verify(function (error, success) {
           if (error) {
               console.log(error);
               reject(error);
           } else {
               console.log("Server is ready to take our messages");
               resolve(success);
           }
       });
   });
   
   const mailData = {
    from: 'portconform@gmail.com',
    to: 'ma.zeghmouri@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
   };
   
   await new Promise((resolve, reject) => {
       // send mail
       transporter.sendMail(mailData, (err, info) => {
           if (err) {
               console.error(err);
               reject(err);
           } else {
               console.log(info);
               resolve(info);
           }
       });
   });
   
   res.status(200).json({ status: "OK" });
   };