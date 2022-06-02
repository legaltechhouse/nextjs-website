const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD
    }
});

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {

    const mailData = {
        from: 'LegalTechHouse <info@legaltechhouse.com>',
        to: `${req.body.fullname} <${req.body.email}>`,
        subject: 'Verify Subscription to Legal Tech House Updates',
        text: "Sent from: " + req.body.email,
        html: '<p>Hello HTML world!</p>',
        templateId: 'd-f91466b428ea498fab3cae4577707312',
        substitutionWrappers: ['{{', '}}'],
        dynamic_template_data: {
            receiver_name: req.body.fullname
        }
    };
    // const companyData = {
    //     from: 'LegalTechHouse <info@legaltechhouse.com>',
    //     to: ['<tech.legaltechhouse@gmail.com>', '<tech@legaltechhouse.com>'],
    //     subject: 'Client Subscription Verification - Legal Tech House Website',
    //     text: "Sent from: " + req.body.email,
    //     html: '<p>Hello HTML world!</p>',
    //     templateId: 'd-5308ea86fd00461782b1033a9278b971',
    //     substitutionWrappers: ['{{', '}}'],
    //     dynamic_template_data: {
    //         receiver_name: req.body.fullname,
    //         receiver_email: req.body.email,
    //     }
    // };


    /* ---- TEST DATA ---- */

    // const quote = `
    //     <h3>Message</h3>
    //     <p>
    //     Name: ${req.body.fullname}<br/>
    //     Email: ${req.body.email}<br/>
    //     Phone: ${req.body.phone}<br/>
    //     <hr/>
    //     Package: ${req.body.message}<br/>
    //     </p>`

    // const mailTrapData = {
    //     to: 'tech.legaltechhouse@gmail.com',
    //     from: 'info@legaltechhouse.com',
    //     subject: 'Package Quote Request - Legal Tech House',
    //     text: "Sent from: " + req.body.email,
    //     html: quote
    // };

    // transporter.sendMail(mailTrapData, function (err, info) {
    //     console.log(req.body)
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log(info)
    //     }
    // });

    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    // javascript

    // const msg = {
    //     to: 'tech.legaltechhouse@gmail.com', // Change to your recipient
    //     from: 'info@legaltechhouse.com', // Change to your verified sender
    //     subject: 'Sending with SendGrid is Fun',
    //     text: 'and easy to do anywhere, even with Node.js',
    //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // }

    await sgMail.send([mailData, companyData]).then((response) => {
        console.log('Subscription Form sent: ', response)
        res.status(200).json({ status: 'OK' });
    }).catch((error) => {
        console.log('Subscription Form NOT sent')
        console.error(error)
    });
};
