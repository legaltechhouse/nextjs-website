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
        to: `${req.body.name} <${req.body.email}>`,
        subject: 'Package Quote Request - Legal Tech House',
        text: "Sent from: " + req.body.email,
        html: '<p>Hello HTML world!</p>',
        templateId: 'd-eea2577efaac466fa6d80c2c3a16e5da',
        substitutionWrappers: ['{{', '}}'],
        dynamic_template_data: {
          receiver_selected_package: req.body.selectedPackage,
          receiver_team_members: req.body.teamMembers,
          receiver_user_logins: req.body.userLogins,
          receiver_admin_logins: req.body.adminLogins,
          receiver_current_sum: req.body.currentSum,
        }
    };
    const companyData = {
        from: 'LegalTechHouse <info@legaltechhouse.com>',
        to: ['<tech.legaltechhouse@gmail.com>', '<tech@legaltechhouse.com>'],
        subject: 'Client Package Quote Request - Legal Tech House Website',
        text: "Sent from: " + req.body.email,
        html: '<p>Hello HTML world!</p>',
        templateId: 'd-a296fc86b4fe4ed2b8e1256572daabc7',
        substitutionWrappers: ['{{', '}}'],
        dynamic_template_data: {
          receiver_name: req.body.name,
          receiver_email: req.body.email,
          receiver_phone_number: req.body.phoneNumber,
          receiver_selected_package: req.body.selectedPackage,
          receiver_team_members: req.body.teamMembers,
          receiver_user_logins: req.body.userLogins,
          receiver_admin_logins: req.body.adminLogins,
          receiver_current_sum: req.body.currentSum,
        }
    };

    // Using MAILTRAP

    // transporter.sendMail(mailData, function (err, info) {
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
            console.log('Email sent: ', response)
            res.status(200).json({ status: 'OK' });
        }).catch((error) => {
            console.log('Email NOT sent')
        console.error(error)
    });
};