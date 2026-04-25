require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit'); // المكتبة الجديدة
const connectDB = require('./config/db');
const socketHandlers = require('./socket/handlers');

// التأكد من وجود المتغيرات الأساسية قبل التشغيل
const REQUIRED_ENV = ['MONGO_URI', 'JWT_SECRET', 'CLIENT_URL', 'AGORA_APP_ID', 'AGORA_APP_CERTIFICATE'];
const missingEnv = REQUIRED_ENV.filter(key => !process.env[key]);
if (missingEnv.length > 0) {
  console.error(`FATAL ERROR: Missing environment variables: ${missingEnv.join(', ')}`);
  process.exit(1);
}

const app = express();
const httpServer = http.createServer(app);

// حماية مسارات التسجيل واللوجين من الـ Brute-force
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { msg: 'محاولات كثيرة جداً، برجاء المحاولة بعد 15 دقيقة.' }
});

const allowedOrigin = process.env.CLIENT_URL;

const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigin,
    methods: ['GET', 'POST'],
    credentials: true
  }
});

connectDB();

app.use(cors({ origin: allowedOrigin, credentials: true }));

// تفعيل حماية الـ CSP لمنع الـ XSS
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://download.agora.io', 'https://cdnjs.cloudflare.com'],
      mediaSrc: ["'self'", 'blob:'],
      connectSrc: ["'self'", 'wss:', 'https://api.agora.io', `wss://${allowedOrigin.replace(/^https?:\/\//, '')}`],
      imgSrc: ["'self'", 'data:', 'https://res.cloudinary.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    }
  }
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/api/auth', authLimiter, require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/lectures', require('./routes/lectures'));
app.use('/api/live', require('./routes/live'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

socketHandlers(io);

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`Server is LIVE on port ${PORT} 🚀`));