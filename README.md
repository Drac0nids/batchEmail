# batchEmail
一个批量发送邮件的脚本，可以自定义邮件内容和发送间隔时间。


安装nodemailer
```
npm install nodemailer
```
使用
```
email-list.txt 为代发送邮箱列表，每行一个邮箱
email.html 为html格式的邮件内容
通过修改index * 5000 后面的5000为其它值，设置邮件发送速率，5000为5秒
```

运行
```
node sendmail.js
```
