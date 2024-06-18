import * as nodemailer from 'nodemailer'

export const sendEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailConfig = {
        from: 'a33736@ubi.pt',
        to: email,
        subject: 'Verifique o seu endereço de email!',
        text: 'Seja bem-vindo à PCTE,\n' +
            '\nDe modo a poder finalizar o seu registo na nossa plataforma, pedimos que faça a verificação do seu email através do seguinte link:\n' +
            `\n${process.env.BASE_URL}/verificacao/${token}\n` +
            '\nObrigado!'
    };

    transporter.sendMail(mailConfig, function (error, info){
        if (error) throw Error(error);
        console.log('Email enviado!');
        console.log(info)
    });
}