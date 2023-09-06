const nodemailer = require('nodemailer');


const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "asrafulnodemailer@gmail.com",
            pass: 'gszb lsan rcfn pcnu'
        },
    });

    let mailOptions = {
        from: 'Task Manager by ASRAFUL <asrafuldata4@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    //Gmail Service Works
// Sign in with app passwords
// Tip: App passwords aren’t recommended and are unnecessary in most cases. To help keep your account secure, use "Sign in with Google" to connect apps to your Google Account.
//
//     An app password is a 16-digit passcode that gives a less secure app or device permission to access your Google Account. App passwords can only be used with accounts that have 2-Step Verification turned on.
//
//     When to use app passwords
// Tip: iPhones and iPads with iOS 11 or up don’t require app passwords. Instead use “Sign in with Google.”
//
// If the app doesn’t offer “Sign in with Google,” you can either:
//
//     Use app passwords
// Switch to a more secure app or device
// Create & use app passwords
// Important: To create an app password, you need 2-Step Verification on your Google Account.
//
//     If you use 2-Step-Verification and get a "password incorrect" error when you sign in, you can try to use an app password.
//
//     Go to your Google Account.
//     Select Security.
//     Under "Signing in to Google," select 2-Step Verification.
//     At the bottom of the page, select App passwords.
//     Enter a name that helps you remember where you’ll use the app password.
//     Select Generate.
//     To enter the app password, follow the instructions on your screen. The app password is the 16-character code that generates on your device.
//     Select Done.
//     If you’ve set up 2-Step Verification but can’t find the option to add an app password, it might be because:
//
//     Your Google Account has 2-Step Verification set up only for security keys.
//     You’re logged into a work, school, or another organization account.
//     Your Google Account has Advanced Protection.
//     Tip: Usually, you’ll need to enter an app password once per app or device.




    // let transporter = nodemailer.createTransport({
    //     host: 'mail.teamrabbil.com',
    //     port: 25,
    //     secure: false,
    //     auth: {
    //         user: "info@teamrabbil.com",
    //         pass: '~sR4[bhaC[Qs'
    //     },tls: {
    //         rejectUnauthorized: false
    //     },
    // });
    //
    //
    // let mailOptions = {
    //     from: 'Task Manager by ASRAFUL <info@teamrabbil.com>',
    //     to: EmailTo,
    //     subject: EmailSubject,
    //     text: EmailText
    // };


    return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility