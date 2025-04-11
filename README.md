# 🚀 Scalable Backend API - Node.js + Express + MongoDB

A production-ready and scalable backend setup using Node.js, Express, MongoDB, and essential middlewares for security, logging, and performance.

---

## 📁 Project Structure
. ├── config/ │ └── db.js ├── controllers/ ├── middlewares/ ├── models/ ├── routes/ ├── utils/ ├── logs/ ├── .env ├── app.js ├── server.js └── README.md


---

## 🔧 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **JWT Authentication**
- **Winston + Morgan** (Logging)
- **Helmet** (Security headers)
- **Rate Limiting**
- **Cookie-Parser**
- **Environment Variables (.env)**

---

## ✅ Features

- User Authentication (Register/Login)
- Role-based access (`admin`, `user`)
- JWT token auth with cookies
- Middleware-based protection
- Logging (Morgan + Winston)
- Rate limiting (per route/customizable)
- Secure HTTP headers with Helmet
- Scalable project folder structure
- Configurable environment variables

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install

🔐 Environment Variables (.env)
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret_key
COOKIE_EXPIRE=3
NODE_ENV=development

🧪 Run the Server
npm run dev      # for development with nodemon
npm start        # for production

📦 API Endpoints
Method	Endpoint	Description
POST	/api/v1/auth/register	User Registration
POST	/api/v1/auth/login	User Login
GET	/api/v1/protected	Protected Route Example

📚 Logs
All HTTP requests are logged using Morgan
All logs are forwarded to custom logger (Winston)
You can find logs in:

bash
Copy code
/logs/