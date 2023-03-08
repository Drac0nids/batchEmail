const fs = require('fs');
const nodemailer = require('nodemailer');

// 邮件列表，每行一个
const emailList = fs.readFileSync('email-list.txt').toString().split('\n');

// 邮件正文html
const htmlContent = fs.readFileSync('email.html').toString();

// Email sender configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 25,
    secureConnection: false,
    auth: {
        user: 'test@163.com',
        pass: '123456'//密码或者smtp授权码
    },
    tls: {
          rejectUnauthorized: false
      }
});

// Email options
const mailOptions = {
    from: 'Test <test@163.com>',
    subject: '这是一封测试邮件',
    html: htmlContent,
    headers: {
        'X-Laziness-level': 1000,
        'X-Mailer': 'foxmail'
    }
};

// Send emails
emailList.forEach((email, index) => {
    setTimeout(() => {
        mailOptions.to = email.trim();
        try {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(`发送邮件给 ${email} 失败: ${error.message}`);
                } else {
                    console.log(`邮件已成功发送给 ${email}: ${info.messageId}`);
                }
            });
        } catch (error) {
            console.error(`连接错误: ${error.message}`);
        }
    }, index * 5000);//发送时间为5秒
});
