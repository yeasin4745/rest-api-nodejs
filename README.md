# 🚀 REST API with Node.js & Express

একটি সম্পূর্ণ RESTful API যা Node.js এবং Express.js ব্যবহার করে তৈরি। এই প্রজেক্টে সকল CRUD অপারেশন (Create, Read, Update, Delete) রয়েছে।

## 📋 বিষয়বস্তু

- [বৈশিষ্ট্যসমূহ](#বৈশিষ্ট্যসমূহ)
- [ইন্সটলেশন](#ইন্সটলেশন)
- [ব্যবহারবিধি](#ব্যবহারবিধি)
- [API Endpoints](#api-endpoints)
- [উদাহরণ](#উদাহরণ)
- [প্রযুক্তি স্ট্যাক](#প্রযুক্তি-স্ট্যাক)

## ✨ বৈশিষ্ট্যসমূহ

- ✅ **GET** - সব ডেটা অথবা নির্দিষ্ট ডেটা পড়া
- ✅ **POST** - নতুন ডেটা তৈরি করা
- ✅ **PUT** - বিদ্যমান ডেটা আপডেট করা
- ✅ **DELETE** - ডেটা মুছে ফেলা
- ✅ CORS সাপোর্ট
- ✅ JSON Response Format
- ✅ Error Handling
- ✅ Clean Code Structure

## 🛠️ ইন্সটলেশন

### প্রয়োজনীয় সফটওয়্যার

- Node.js (v14 অথবা উপরের ভার্সন)
- npm অথবা yarn

### ধাপসমূহ

1. **রিপোজিটরি ক্লোন করুন**
```bash
git clone https://github.com/yeasin4745/rest-api-nodejs.git
cd rest-api-nodejs
```

2. **Dependencies ইন্সটল করুন**
```bash
npm install
```

3. **সার্ভার চালু করুন**
```bash
# Production mode
npm start

# Development mode (nodemon দিয়ে)
npm run dev
```

4. **ব্রাউজারে যান**
```
http://localhost:5000
```

## 🎯 ব্যবহারবিধি

সার্ভার চালু হওয়ার পর নিচের endpoints গুলো ব্যবহার করতে পারবেন।

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### 1. সব ইউজার দেখানো (GET)

**Endpoint:** `GET /api/users`

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Yeasin",
      "email": "yeasin@example.com",
      "role": "Full-Stack Developer"
    }
  ]
}
```

### 2. নির্দিষ্ট ইউজার দেখানো (GET by ID)

**Endpoint:** `GET /api/users/:id`

**Example:** `GET /api/users/1`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Yeasin",
    "email": "yeasin@example.com",
    "role": "Full-Stack Developer"
  }
}
```

### 3. নতুন ইউজার তৈরি (POST)

**Endpoint:** `POST /api/users`

**Request Body:**
```json
{
  "name": "Rahman",
  "email": "rahman@example.com",
  "role": "Backend Developer"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 3,
    "name": "Rahman",
    "email": "rahman@example.com",
    "role": "Backend Developer"
  }
}
```

### 4. ইউজার আপডেট (PUT)

**Endpoint:** `PUT /api/users/:id`

**Example:** `PUT /api/users/1`

**Request Body:**
```json
{
  "name": "Yeasin Ahmed",
  "role": "Senior Full-Stack Developer"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": 1,
    "name": "Yeasin Ahmed",
    "email": "yeasin@example.com",
    "role": "Senior Full-Stack Developer"
  }
}
```

### 5. ইউজার মুছে ফেলা (DELETE)

**Endpoint:** `DELETE /api/users/:id`

**Example:** `DELETE /api/users/1`

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "id": 1,
    "name": "Yeasin",
    "email": "yeasin@example.com",
    "role": "Full-Stack Developer"
  }
}
```

## 💡 উদাহরণ

### Postman দিয়ে টেস্ট করা

1. Postman ওপেন করুন
2. নতুন Request তৈরি করুন
3. Method সিলেক্ট করুন (GET/POST/PUT/DELETE)
4. URL লিখুন: `http://localhost:5000/api/users`
5. POST/PUT এর জন্য Body তে JSON ডেটা দিন
6. Send বাটনে ক্লিক করুন

### cURL দিয়ে টেস্ট করা

```bash
# GET সব ইউজার
curl http://localhost:5000/api/users

# POST নতুন ইউজার
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Karim","email":"karim@example.com","role":"Developer"}'

# PUT ইউজার আপডেট
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Yeasin Updated"}'

# DELETE ইউজার মুছুন
curl -X DELETE http://localhost:5000/api/users/1
```

### JavaScript Fetch API দিয়ে

```javascript
// GET Request
fetch('http://localhost:5000/api/users')
  .then(response => response.json())
  .then(data => console.log(data));

// POST Request
fetch('http://localhost:5000/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Rahim',
    email: 'rahim@example.com',
    role: 'Designer'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## 🔧 প্রযুক্তি স্ট্যাক

- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **CORS** - Cross-Origin Resource Sharing
- **Nodemon** - Development Tool (Auto-restart)

## 📂 প্রজেক্ট স্ট্রাকচার

```
rest-api-nodejs/
│
├── server.js          # Main server file
├── package.json       # Dependencies এবং scripts
├── README.md          # Documentation
└── .gitignore         # Git ignore file
```

## 🚧 পরবর্তী উন্নয়ন

- [ ] MongoDB ডাটাবেস সংযোগ
- [ ] Authentication (JWT)
- [ ] Input Validation (Joi/Express-validator)
- [ ] API Rate Limiting
- [ ] Logging System
- [ ] Unit Testing
