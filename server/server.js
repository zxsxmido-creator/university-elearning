require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet'); // <-- تم إضافة استدعاء المكتبة هنا
const connectDB = require('./config/db');
const socketHandlers = require('./socket/handlers');

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST']
  }
});

connectDB();

// إعدادات الـ CORS
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));

// إعدادات الحماية (Helmet) المخصصة لخدمة Agora
//app.use(
  //helmet({
    //contentSecurityPolicy: {
      //directives: {
        //defaultSrc: ["'self'"],
        // السماح بتشغيل أكواد Agora و eval اللازمة لمعالجة الفيديو
        //scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "*.agora.io", "*.sdktar.com"],
        // السماح بالاتصال بسيرفرات Agora للصوت والصورة
        //connectSrc: ["'self'", "*.agora.io", "*.sdktar.com", "wss://*.agora.io"],
        // السماح بتحميل الصور والبيانات
        //imgSrc: ["'self'", "data:", "*.agora.io"],
        // السماح بتدفق الميديا (الفيديو والصوت)
        //mediaSrc: ["'self'", "blob:"],
      //},
    //},
  //})
//);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/lectures', require('./routes/lectures'));
app.use('/api/live', require('./routes/live'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

socketHandlers(io);

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));